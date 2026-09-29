// Traitement du formulaire de devis (/contact) – envoi par email via Resend
import type { APIRoute } from 'astro';
import { RESEND_API_KEY, RESEND_FROM, RESEND_TO } from 'astro:env/server';
import { Resend } from 'resend';
import { contact } from '../../data/seo.js';

export const prerender = false;

const retour = '/contact/';
const resend = new Resend(RESEND_API_KEY);

const redirection = (envoi: 'ok' | 'erreur') =>
  new Response(null, { status: 303, headers: { Location: `${retour}?envoi=${envoi}#formulaire` } });

export const GET: APIRoute = () => new Response(null, { status: 303, headers: { Location: retour } });

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirection('erreur');
  }

  const champ = (nom: string, max = 200) =>
    String(form.get(nom) ?? '').trim().replace(/[\r\n]+/g, ' ').slice(0, max);

  // Robot : le champ caché est rempli → on fait semblant que tout va bien
  if (champ('site_web') !== '') return redirection('ok');

  const prenom = champ('prenom', 80);
  const nom = champ('nom', 80);
  const email = champ('email', 150);
  const tel = champ('tel', 30);
  const service = champ('service', 80);
  const commune = champ('commune', 80);
  const message = String(form.get('message') ?? '').trim().slice(0, 5000);

  if (!prenom || !nom || !message || !form.get('consent') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return redirection('erreur');
  }

  const sujet = `Demande de devis – ${prenom} ${nom}`
    + (service ? ` – ${service}` : '')
    + (commune ? ` – ${commune}` : '');

  const corps = [
    "Nouvelle demande depuis le site Arbor'essence",
    '==============================================',
    '',
    `Nom       : ${prenom} ${nom}`,
    `Email     : ${email}`,
    `Téléphone : ${tel || '—'}`,
    `Commune   : ${commune || '—'}`,
    `Service   : ${service || '—'}`,
    '',
    'Message :',
    message,
  ].join('\n');

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: RESEND_TO || contact.email,
    replyTo: `${prenom} ${nom} <${email}>`,
    subject: sujet,
    text: corps,
  });

  if (error) console.error('Resend :', error);
  return redirection(error ? 'erreur' : 'ok');
};
