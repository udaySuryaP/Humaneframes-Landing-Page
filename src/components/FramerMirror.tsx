const origin = "https://www.humaneframes.com";

export default function FramerMirror({ route }: { route: string }) {
  const normalizedRoute = route === "/" ? "/" : `/${route.replace(/^\/+/, "")}`;
  const src = `${origin}${normalizedRoute}`;

  return (
    <iframe
      title="Humaneframes"
      src={src}
      className="fixed inset-0 h-dvh w-screen border-0 bg-[#f3f3f1]"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
