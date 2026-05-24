'use client';

export default function HomePage() {
  return (
    <main
      className="
        relative

        min-h-screen

        overflow-x-hidden
        overflow-y-auto

        bg-[#02050b]
        text-white
      "
    >
      {/* AMBIENT LIGHT */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,#00ffb305,transparent_42%)]
        "
      />

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_bottom,#00d08404,transparent_38%)]
        "
      />

      {/* GRID */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.02]

          bg-[linear-gradient(to_right,#00ffb308_1px,transparent_1px),linear-gradient(to_bottom,#00ffb308_1px,transparent_1px)]

          bg-[size:72px_72px]
        "
      />

      {/* HERO */}

      <section
        className="
          relative
          z-10

          flex
          flex-col
          items-center

          px-6

          pt-8
          pb-20

          sm:px-8
          sm:pt-10

          md:px-10
          md:pt-12

          text-center
        "
      >
        {/* LOGO */}

        <img
          src="/cryptoxcope_logo_optimized.webp"
          alt="CryptoXcope"
          className="
            mb-1

            w-[170px]
            sm:w-[220px]
            md:w-[300px]
            lg:w-[380px]

            max-w-[88vw]

            object-contain
            select-none

            mix-blend-lighten
          "
          draggable={false}
        />

        {/* TITLE */}

        <h1
          className="
            max-w-5xl

            font-black

            tracking-tight

            leading-[1.02]

            text-[1.7rem]

            sm:text-[3rem]

            md:text-[4.1rem]

            lg:text-[4.8rem]
          "
        >
          <span
            className="
              block

              text-white
            "
          >
            AI-Powered
          </span>

          <span
            className="
              mt-1
              block

              text-[#00c97b]
            "
          >
            Crypto Intelligence
          </span>
        </h1>

        {/* SUBTITLE */}

        <p
          className="
            mt-5

            max-w-3xl

            text-sm
            sm:text-base
            md:text-lg

            leading-relaxed

            text-white
          "
        >
          Transforming raw cryptocurrency market data into structured 
          intelligence for quantitative research, strategy validation and 
          analytical workflows.

        </p>

        {/* STATUS */}

        <div
          className="
            mt-10

            inline-flex
            items-center
            gap-3

            rounded-full

            border
            border-emerald-500/20

            bg-emerald-500/5

            px-5
            py-3

            text-sm
            sm:text-base

            font-medium

            text-white

            backdrop-blur-sm
          "
        >
          <div
            className="
              h-2
              w-2

              rounded-full

              bg-emerald-400
            "
          />

          Platform currently under active development
        </div>
      </section>

      {/* SECTION 1 */}

      <section
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-6
          pb-28

          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            mb-5

            text-center

            text-[13px]

            font-semibold

            tracking-[0.35em]

            text-emerald-400
          "
        >
          • THE PROBLEM
        </div>

        <h2
          className="
            mx-auto

            max-w-5xl

            text-center

            text-[1.9rem]

            font-black

            leading-[1.04]

            text-white

            sm:text-[2.9rem]

            md:text-[3.8rem]
          "
        >
          Having a trading idea is challenging.
          <br />
          Understanding whether it makes sense requires
          methodology.
        </h2>

        <p
          className="
            mx-auto
            mt-8

            max-w-4xl

            text-center

            text-base
            leading-relaxed

            text-white/55

            md:text-xl
          "
        >
          Decisions based only on intuition may appear
          convincing, but often hide risks, limitations and
          missing context.
        </p>

        <div
          className="
            mt-16

            grid

            gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {[
            {
              number: '01',
              title: 'Manual testing is time consuming',
              desc:
                'Validating trading ideas manually consumes time and often produces inconsistent outcomes.',
            },

            {
              number: '02',
              title: 'Data without context',
              desc:
                'Looking at isolated numbers makes it difficult to understand actual strategy behavior.',
            },

            {
              number: '03',
              title: 'Complex tools',
              desc:
                'Many solutions require programming knowledge, setup effort and steep learning curves.',
            },

            {
              number: '04',
              title: 'Decisions in the dark',
              desc:
                'Without structured analysis, ideas may reach the market without enough evidence.',
            },
          ].map((item) => (
            <div
              key={item.number}
              className="
                rounded-[34px]

                border
                border-white/[0.05]

                bg-[linear-gradient(180deg,#071120,#050c18)]

                p-8

                shadow-[0_0_40px_rgba(0,255,179,.03)]

                transition-all
                duration-500

                hover:border-emerald-400/15
                hover:bg-[linear-gradient(180deg,#0a1526,#07111d)]
              "
            >
              <div
                className="
                  mb-8

                  flex
                  h-[56px]
                  w-[56px]

                  items-center
                  justify-center

                  rounded-[18px]

                  bg-emerald-500/10

                  text-[2rem]
                  font-black

                  text-emerald-400
                "
              >
                {item.number}
              </div>

              <h3
                className="
                  text-[1.9rem]

                  font-bold

                  leading-tight

                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-6

                  text-[1rem]
                  leading-relaxed

                  text-white/60
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 */}

      <section
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-6
          pb-32

          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            mb-5

            text-center

            text-[13px]

            font-semibold

            tracking-[0.35em]

            text-emerald-400
          "
        >
          • PLATFORM CAPABILITIES
        </div>

        <h2
          className="
            mx-auto

            max-w-6xl

            text-center

            text-[2rem]

            font-black

            leading-[1.02]

            text-white

            sm:text-[3rem]

            md:text-[4rem]
          "
        >
          Transform cryptocurrency market
          <br />
          data into intelligence
        </h2>

        <p
          className="
            mx-auto
            mt-8

            max-w-3xl

            text-center

            text-base
            leading-relaxed

            text-white/60

            md:text-xl
          "
        >
          We convert raw market data into structured insights.
          Analyze, validate and decide with clarity and
          confidence.
        </p>

        <div
          className="
            mt-16

            grid

            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {[
            {
              icon: '↗',
              title: 'AI Market Insights',
              desc:
                'AI-powered analysis that uncovers trends, regimes and key drivers behind market behavior.',
            },

            {
              icon: '◎',
              title: 'Strategy Backtesting',
              desc:
                'Test strategies with precision, realistic conditions and advanced performance metrics.',
            },

            {
              icon: '◫',
              title: 'Multi-Source Data',
              desc:
                'Access cleaned, normalized and enriched datasets designed for quantitative workflows.',
            },

            {
              icon: '◌',
              title: 'Pattern Detection',
              desc:
                'Identify high-probability patterns, contextual signals and structures.',
            },

            {
              icon: '◔',
              title: 'Machine Learning',
              desc:
                'Leverage ML workflows to uncover hidden relationships and research signals.',
            },

            {
              icon: '◉',
              title: 'Research Analytics',
              desc:
                'Explore, compare and validate ideas with structured analysis.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-[34px]

                border
                border-white/[0.05]

                bg-[linear-gradient(180deg,#071120,#050c18)]

                p-8

                shadow-[0_0_40px_rgba(0,255,179,.03)]

                transition-all
                duration-500

                hover:border-emerald-400/15
                hover:bg-[linear-gradient(180deg,#0a1526,#07111d)]
              "
            >
              <div
                className="
                  mb-8

                  flex
                  h-[56px]
                  w-[56px]

                  items-center
                  justify-center

                  rounded-[18px]

                  bg-emerald-500/10

                  text-[1.8rem]

                  text-emerald-400
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  text-[1.9rem]

                  font-bold

                  leading-tight

                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-6

                  text-[1rem]
                  leading-relaxed

                  text-white/60
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER STATUS */}

        <div
          className="
            mt-16

            flex
            justify-center
          "
        >
          <div
            className="
              rounded-full

              border
              border-[#00d084]/20

              bg-[#00d084]/5

              px-7
              py-3

              text-[11px]
              sm:text-sm

              font-semibold

              tracking-[0.35em]

              text-white

              backdrop-blur-sm
            "
          >
            PLATFORM PREVIEW • UNDER ACTIVE DEVELOPMENT
          </div>
        </div>
      </section>
    </main>
  );
}