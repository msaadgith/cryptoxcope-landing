'use client';

export default function HomePage() {
  return (
    <main
      className="
        relative
        h-screen
        overflow-hidden
        bg-black
      "
    >
      {/* HERO IMAGE */}

      <div
        className="
          absolute
          inset-0

          bg-center
          bg-no-repeat
          bg-black
        "
        style={{
          backgroundImage:
            "url('/cryptoxcope_launching_soon.webp')",

          backgroundSize: '60%',
        }}
      />

      {/* SUBTLE OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-black/10
        "
      />
    </main>
  );
}