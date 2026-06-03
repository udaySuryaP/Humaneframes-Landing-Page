const origin = "https://www.humaneframes.com";

export default function FramerMirror({ route }: { route: string }) {
  const normalizedRoute = route === "/" ? "/" : `/${route.replace(/^\/+/, "")}`;
  const src = `${origin}${normalizedRoute}`;

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#f3f3f1]">
      <iframe
        title="Humaneframes"
        src={src}
        className="h-dvh w-screen border-0 bg-[#f3f3f1]"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[18px] bg-[#f3f3f1]" />
    </div>
  );
}
