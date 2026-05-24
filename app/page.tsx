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

          bg-[length:95%]

          sm:bg-[length:80%]

          lg:bg-[length:60%]
        "
        style={{
          backgroundImage:
            "url('/cryptoxcope_launching_soon.webp')",
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