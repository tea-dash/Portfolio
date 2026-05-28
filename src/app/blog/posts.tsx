import React from 'react';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  publishedAt: string; // ISO date string (YYYY-MM-DD)
  render: () => React.ReactNode;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-be-happy-scientifically',
    title: 'How to Be Happy Scientifically',
    description:
      "Happiness is a neurochemical state shaped by dopamine, serotonin, and oxytocin. Learn how to stop chasing quick hits and build a sustainable foundation for wellbeing.",
    thumbnailSrc: '/how%20to%20be%20happy%20.webp',
    thumbnailAlt: 'How to be happy illustration',
    publishedAt: '2026-02-07',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">How to Be Happy - Scientifically</h2>
          <p className="text-base">
            Happiness is not something that just happens to you. It is a neurochemical state shaped by three molecules your
            brain produces every day. But not all happiness chemicals are created equal. Understanding the difference might
            be one of the most important things you ever learn about your own mind.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The trap most people fall into</h2>
          <p className="text-base">
            We live in a world optimized for dopamine. Every app, every snack, every notification is engineered to give you
            a quick hit of that "more, more, more" feeling. And it works for a moment. But dopamine is a craving system,
            and it escalates. Every hit raises the bar. Next time, you need a stronger stimulus to feel the same
            satisfaction. One scroll becomes an hour. One episode becomes five. One like is never enough.
          </p>
          <p className="text-base">
            The more you chase dopamine, the harder happiness becomes to reach. You are always one step behind your own
            appetite.
          </p>
          <p className="text-base">
            But there are two other molecules, serotonin and oxytocin, that work completely differently. They do not
            escalate. They do not leave you craving more. They replenish you. Building your life around them, rather than
            dopamine, is what the science of happiness actually points to.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Dopamine - the double-edged molecule</h2>
          <p className="text-base">
            Dopamine is not about pleasure. It is about pursuit. It fires when you anticipate a reward, make progress
            toward a goal, or accomplish something, which is why crossing things off a to-do list feels so good.
          </p>
          <p className="text-base">
            Used well, dopamine is a powerful ally. It drives ambition, focus, and the satisfaction of growth. The problem
            is when we feed it with cheap, effortless stimulation. Social media, junk food, and constant novelty hijack the
            system and burn it out, leaving you perpetually stimulated but never fulfilled.
          </p>
          <p className="text-base">
            The key is to channel dopamine, not chase it. Break big goals into small, completable steps. Celebrate genuine
            progress. Learn new things. Deliberately cut back on low-effort stimulation so real achievements feel rewarding
            again.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Serotonin - the steady foundation</h2>
          <p className="text-base">
            Serotonin is the quiet backbone of your emotional life. It does not create excitement or euphoria. It creates
            steadiness. When serotonin is flowing, you feel calm, content, and grounded. When it is low, everything feels
            harder. Depression, anxiety, and irritability creep in.
          </p>
          <p className="text-base">
            Unlike dopamine, serotonin does not demand more each time. A morning walk today feels just as good as a morning
            walk next week. A sunset does not lose its power through repetition. This is what makes serotonin so valuable:
            it is a renewable source of wellbeing that never inflates.
          </p>
          <p className="text-base">
            About 90% of your serotonin is produced in your gut, which means the basics matter enormously: morning
            sunlight, rhythmic exercise like walking or swimming, a diet rich in fiber and fermented foods, and a daily
            gratitude practice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Oxytocin - the deepest happiness</h2>
          <p className="text-base">
            If serotonin is steadiness, oxytocin is warmth. It is the chemistry of genuine human connection, surging during
            physical touch, acts of generosity, and moments of real trust. It is what makes a long hug feel like medicine,
            and what makes a deep conversation more satisfying than an hour of entertainment.
          </p>
          <p className="text-base">
            Like serotonin, oxytocin does not escalate. You do not need a bigger gesture next time to feel the same
            closeness. A kind word, a hug, or a vulnerable conversation gives back without demanding more. Research
            consistently shows that relationship quality is one of the strongest predictors of long-term happiness.
          </p>
          <p className="text-base">
            Boost it by hugging someone for at least 20 seconds, having one real conversation a day, doing something kind
            for someone else, or spending time with a pet.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The takeaway that changes everything</h2>
          <p className="text-base">Dopamine says: that was good, but I need more, and more, and more.</p>
          <p className="text-base">Serotonin and oxytocin say: that was enough. I feel full.</p>
          <p className="text-base">
            This is the core insight. Happiness built on dopamine is a treadmill, always moving, never arriving. Happiness
            built on serotonin and oxytocin is a foundation, something you can actually stand on.
          </p>
          <p className="text-base">
            This does not mean eliminating dopamine. It means redirecting it toward things worth pursuing, growth, mastery,
            and meaningful goals, while letting serotonin and oxytocin do the deeper work of keeping you well.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">A simple daily protocol</h2>
          <p className="text-base">
            You do not need to overhaul your life. Just a handful of daily habits that feed all three chemicals in the
            right way:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Morning sunlight walk - 20 minutes outside, ideally first thing</li>
            <li>One real conversation - meaningful connection, not small talk</li>
            <li>Complete one meaningful thing - real progress, not busywork</li>
            <li>Physical contact - a hug, time with a pet, human warmth</li>
            <li>Evening gratitude - three specific things before bed</li>
            <li>Cut 30 minutes of scrolling - protect your dopamine sensitivity</li>
          </ul>
          <p className="text-base">
            Your brain responds to your choices. Sunlight, movement, connection, purpose, and gratitude are the chemical
            inputs your brain needs to produce the emotional outputs you are looking for.
          </p>
          <p className="text-base">Stop chasing more. Start building enough.</p>
        </section>
      </div>
    ),
  },
  {
    slug: 'okrs-the-goal-setting-framework-that-actually-works',
    title: 'OKRs: The Goal-Setting Framework That Actually Works',
    description:
      'Most companies set goals that gather dust. OKRs — Objectives and Key Results — are the antidote: a simple, battle-tested system that keeps teams focused, aligned, and honest about what they\'re actually achieving.',
    thumbnailSrc: '/OKR.png',
    thumbnailAlt: 'OKRs framework illustration showing Align, Focus, Win with Objective and Key Results',
    publishedAt: '2026-02-07',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <p className="text-base">
            Most companies set goals that gather dust. OKRs — Objectives and Key Results — are the antidote: a simple,
            battle-tested system that keeps teams focused, aligned, and honest about what they're actually achieving.
          </p>
          <p className="text-base">
            Walk into most companies and ask what the top three priorities are. You'll get five different answers from five
            different people. Not because the strategy is secret — but because no one ever made it concrete, measurable, or
            visible. Goals live in a deck that was shared once in an all-hands and never opened again.
          </p>
          <p className="text-base">OKRs were built to fix exactly that.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What is an OKR?</h2>
          <p className="text-base">
            OKR stands for Objective and Key Results. It's a goal-setting framework with two distinct parts working
            together.
          </p>
          <p className="text-base">
            The <span className="font-medium">Objective</span> is qualitative and inspiring. It answers the question: where
            do we want to go? Think of it as the direction — ambitious, motivating, and clear enough that any team member
            could repeat it without a slide deck.
          </p>
          <p className="text-base">
            The <span className="font-medium">Key Results</span> are measurable outcomes that define what "getting there"
            actually looks like. They answer: how will we know we arrived? Good key results have numbers. If you can't
            measure it, it's not a key result — it's a task.
          </p>
          <p className="text-base">Here's what that looks like in practice:</p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-medium text-gray-900 mb-2">
              Objective: Make our product the most trusted tool for freelance invoicing
            </p>
            <ul className="space-y-1 text-base">
              <li>Key Result 1: Grow monthly active users from 50k to 150k</li>
              <li>Key Result 2: Achieve a customer NPS of 60 or above</li>
              <li>Key Result 3: Reduce invoice creation time from 8 minutes to under 2</li>
            </ul>
          </div>
          <p className="text-base">
            Notice how the objective sounds like something you'd put on a poster, while the key results read like a
            scorecard. That tension is intentional. Together, they force a team to be both bold and accountable.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            "If you hit 100% of your key results every time, you're not aiming high enough."
          </blockquote>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">A real-world example</h2>
          <p className="text-base">
            Google is probably the most famous OKR success story. John Doerr introduced the framework to Larry Page and
            Sergey Brin in 1999, when the company had fewer than 40 employees. They adopted it — and never stopped. Google
            credits OKRs as a core driver of how it scaled from a scrappy startup to one of the largest companies in the
            world.
          </p>
          <p className="text-base">Here's what a Google-style OKR might have looked like in the early days of Gmail:</p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-medium text-gray-900 mb-2">Objective: Make Gmail indispensable for power users</p>
            <ul className="space-y-1 text-base">
              <li>Key Result 1: Reach 1 million active users within 6 months of public launch</li>
              <li>Key Result 2: Achieve a 30-day retention rate of 65% or higher</li>
              <li>Key Result 3: Reduce average email load time to under 1 second</li>
              <li>Key Result 4: Keep support tickets below 0.5% of daily active users</li>
            </ul>
          </div>
          <p className="text-base">
            The objective is vivid and directional. The key results are hard numbers with clear deadlines. Any engineer,
            designer, or PM on the team could look at this and immediately know what success looks like.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Why companies use OKRs</h2>
          <p className="text-base">
            Plenty of goal-setting frameworks exist. OKRs have survived decades and spread across industries because they
            solve real, recurring problems in how organizations operate.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>
              <span className="font-medium">Focus.</span> OKRs force a company to pick what actually matters. Most teams
              can only handle three to five real priorities per quarter — the framework makes you choose.
            </li>
            <li>
              <span className="font-medium">Alignment.</span> OKRs cascade from the company level down to teams and
              individuals. Everyone can see how their work connects to the big picture, which reduces silos and duplicate
              effort.
            </li>
            <li>
              <span className="font-medium">Ambition.</span> OKRs are designed to be stretch goals. Hitting 70% of a
              moonshot beats hitting 100% of something safe. The framework gives teams permission to aim high.
            </li>
            <li>
              <span className="font-medium">Transparency.</span> OKRs are public within the company. Anyone can see what
              any team is working toward, which builds trust and surfaces conflicts early.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The most common OKR mistakes</h2>
          <p className="text-base">
            OKRs are simple to understand and hard to do well. A few patterns consistently trip teams up.
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-900">Confusing outputs with outcomes.</h3>
              <p className="text-base">
                "Launch the new dashboard" is an output — it describes work done, not value delivered. A good key result
                might be: "New dashboard reduces time-to-insight for analysts from 45 minutes to under 10." The launch is
                the means; the behavior change is the result.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Setting too many OKRs.</h3>
              <p className="text-base">
                If everything is a priority, nothing is. Most teams do best with one or two objectives per quarter, each
                with two to four key results.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Tying them to performance reviews.</h3>
              <p className="text-base">
                OKRs should not be linked directly to compensation or bonuses. When people are graded on their OKRs, they
                start sandbagging targets. The whole point of the framework is to encourage ambitious goal-setting — that
                only works if people feel safe aiming high and falling short.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Getting started</h2>
          <p className="text-base">
            You don't need software, a consultant, or a company-wide rollout to try OKRs. Start with one team, one
            quarter, and three honest questions: what's the most important thing we want to accomplish? How will we know we
            got there? And — crucially — are we willing to make this visible and check on it regularly?
          </p>
          <p className="text-base">
            The framework is almost embarrassingly simple. The discipline is in actually using it.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: 'is-optimization-always-good',
    title: 'Is Optimization Always Good?',
    description:
      'Optimization can improve systems, but applied blindly it can erase meaning. Here is how to decide what to optimize and what to protect.',
    thumbnailSrc: '/optimization%20.jpeg',
    thumbnailAlt: 'Arrow hitting a target with the word Optimization',
    publishedAt: '2026-02-07',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Is Optimization Always Good?</h2>
          <p className="text-base">We live in a time that treats optimization like a universal good.</p>
          <p className="text-base">
            Save time. Reduce waste. Automate the routine. Make everything faster, cheaper, and more efficient. From startup
            culture to self-improvement advice, optimization is often presented as the obvious path forward. If something
            can be streamlined, why not streamline it?
          </p>
          <p className="text-base">But optimization is not always improvement.</p>
          <p className="text-base">In fact, when applied blindly, optimization can make life worse.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Meal replacement is efficient but not human</h2>
          <p className="text-base">
            Take meal replacement drinks as an example. On paper, they seem like a highly rational solution. Instead of
            spending time planning meals, shopping for groceries, cooking, eating, and cleaning, you can simply drink
            something engineered to give you the nutrients you need. It is efficient. It saves time. It reduces decision
            fatigue. For a busy founder, student, or worker, that can sound ideal.
          </p>
          <p className="text-base">But a meal is not only nutrition.</p>
          <p className="text-base">
            A meal is also enjoyment. It is taste, texture, culture, ritual, and rest. It can be a reason to sit down with
            friends, talk with family, or step away from work for a moment. Cooking can be creative. Eating can be
            comforting. Sharing food can build relationships. When you reduce food to fuel, you may optimize the measurable
            part while removing the human part.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Social life is not a productivity equation</h2>
          <p className="text-base">
            The same logic appears in social life. Consider alcohol at parties. From a purely health or productivity
            perspective, drinking may seem irrational. It costs money, may harm your health, and can reduce your
            performance the next day. If the goal is strict optimization, the conclusion may be simple: avoid it.
          </p>
          <p className="text-base">
            But social situations are not always governed by efficiency. For many people, a drink at a party is not really
            about the liquid itself. It is about relaxation, bonding, celebration, and lowering social tension. That does
            not mean alcohol is always good, or that people need it to connect. It simply means that human life cannot
            always be understood through a productivity lens alone.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Optimization depends on what you measure</h2>
          <p className="text-base">This is the deeper problem with optimization: it depends entirely on what you are measuring.</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>If you measure only time, meal replacement drinks look superior to meals</li>
            <li>If you measure only health, alcohol may look obviously pointless</li>
            <li>If you measure only speed, walking is worse than driving</li>
            <li>If you measure only convenience, online shopping beats browsing a bookstore</li>
          </ul>
          <p className="text-base">But life is not lived through one metric.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Meaning is often inefficient on purpose</h2>
          <p className="text-base">
            Some of the most meaningful parts of life are inefficient on purpose. Long conversations. Home-cooked meals.
            Celebrations. Hobbies. Travel. Time spent with people you care about. None of these are optimized in the
            strictest sense. Many of them cost time, money, and energy. Yet they are often the very things that make life
            feel rich and worth living.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Use optimization for systems, not for everything</h2>
          <p className="text-base">
            Optimization works well for systems. It works well for logistics, operations, software performance, and
            repetitive tasks. Startups should optimize processes. Companies should reduce waste. Individuals can benefit
            from simplifying routines. There is real value in efficiency.
          </p>
          <p className="text-base">
            The danger begins when we assume that whatever is more efficient is automatically better.
          </p>
          <p className="text-base">
            That assumption ignores a basic truth: humans are not machines. A good life is not just a high-performance
            system. It includes joy, meaning, relationships, spontaneity, and even a certain amount of inefficiency.
            Sometimes what looks wasteful on paper is valuable in practice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The goal is not to optimize everything</h2>
          <p className="text-base">The real goal is to know what should be optimized and what should be protected from optimization.</p>
          <p className="text-base">Save time on tasks that do not matter much. Do not rush the parts of life that do.</p>
          <p className="text-base">
            Because if you optimize everything for efficiency, you may end up with a life that performs well on paper, but
            feels empty in reality.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: 'how-to-focus',
    title: 'How to Focus',
    description:
      'Focus is not just discipline. It is biology. Learn how the Tamer and Savage systems compete, why willpower fails, and how stable fuel and the MIND diet support consistent attention.',
    thumbnailSrc: '/focus.jpg',
    thumbnailAlt: 'Magnifying glass over the word Focus',
    publishedAt: '2026-02-07',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Focus is not a personality trait. It is biology.</h2>
          <p className="text-base">
            Most people think focus is about discipline. In reality, focus is often the result of how well you manage two
            competing systems in your brain:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>
              <span className="font-medium">The Savage</span> - fast, instinctive, and reactive. It wants comfort now:
              sleep, sugar, dopamine, and easy wins.
            </li>
            <li>
              <span className="font-medium">The Tamer</span> - slow, deliberate, and goal-driven. It plans, delays
              gratification, and keeps long-term priorities on track.
            </li>
          </ul>
          <p className="text-base">
            When you cannot focus, it is often not laziness. It is the Savage taking over because your basic needs are not
            being met consistently.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Willpower has a limit</h2>
          <p className="text-base">
            Willpower is not infinite. It is a limited resource that gets weaker when you are tired, stressed, hungry, or
            overwhelmed.
          </p>
          <p className="text-base">
            That means relying on willpower alone is a fragile strategy. If your system is built on "I will resist cravings
            all day," you will eventually lose - not because you are weak, but because your brain is working as designed.
          </p>
          <p className="text-base">A better strategy is to reduce how often you even need willpower in the first place.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Why junk food does not calm the Savage for long</h2>
          <p className="text-base">Junk food delivers quick reward, but it fails to satisfy deeper needs:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Low fiber means you get hungry again sooner</li>
            <li>Low micronutrients means your body still "wants something"</li>
            <li>Hyper-palatable flavors train your brain to crave the same hit again</li>
          </ul>
          <p className="text-base">So the loop looks like this:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>The Savage feels discomfort (stress, fatigue, hunger, boredom)</li>
            <li>You eat something ultra-rewarding</li>
            <li>You feel temporary relief</li>
            <li>Cravings return and your attention gets hijacked again</li>
          </ul>
          <p className="text-base">
            It is completely fine to eat these foods sometimes. The problem is when they become your default fuel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The real lever for focus: stable fuel</h2>
          <p className="text-base">
            The Tamer depends on mental resources like attention and working memory. When your body is under-recovered or
            under-nourished, the Tamer has less capacity, and the Savage becomes louder.
          </p>
          <p className="text-base">
            One of the most practical focus upgrades is simple: meet your basic requirements with real food consistently.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What the MIND diet is (and why it is legit)</h2>
          <p className="text-base">
            MIND stands for Mediterranean-DASH Intervention for Neurodegenerative Delay. It was developed by researchers at
            Rush University Medical Center as a hybrid of the Mediterranean diet and the DASH diet, specifically tuned to
            protect brain health.
          </p>
          <p className="text-base">
            Learn more about the MIND diet here:{' '}
            <a
              href="https://nutritionsource.hsph.harvard.edu/healthy-weight/diet-reviews/mind-diet/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Harvard T.H. Chan School of Public Health - MIND diet review
            </a>
            .
          </p>
          <p className="text-base">Why it is considered legitimate:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>
              Clinical evidence (observational): a National Institute on Aging funded study found up to a 53% lower risk of
              Alzheimer’s with high adherence, and about a 35% lower risk with moderate adherence
            </li>
            <li>Practical: you do not need perfection to benefit</li>
            <li>Targeted: it emphasizes foods most consistently linked with cognitive protection</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The MIND diet scoring system (15 points)</h2>
          <p className="text-base">
            The diet is scored out of 15 points. You earn 1 point for meeting the target for each category. There are 10
            brain-healthy categories (eat more) and 5 unhealthy categories (limit them). The unhealthy categories are
            reverse-scored - you earn points by staying under the limit.
          </p>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">10 brain-healthy foods (10 points)</h3>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Green leafy vegetables - 6+ servings per week (1 cup raw or 1/2 cup cooked)</li>
              <li>Other vegetables - 1+ serving per day (non-starchy veggies)</li>
              <li>Berries - 2+ servings per week (blueberries and strawberries are most studied)</li>
              <li>Nuts - 5+ servings per week (about one handful)</li>
              <li>Beans and legumes - 3+ servings per week (black beans, lentils, chickpeas)</li>
              <li>Whole grains - 3+ servings per day (oatmeal, quinoa, brown rice, whole wheat bread)</li>
              <li>Fish - 1+ serving per week (not fried; fatty fish like salmon or sardines)</li>
              <li>Poultry - 2+ servings per week (chicken or turkey, not fried)</li>
              <li>Olive oil - primary oil used for cooking and dressing</li>
              <li>Wine - 1 glass per day (optional; do not start if you do not drink)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">5 foods to limit (5 points)</h3>
            <ul className="list-disc pl-6 space-y-1 text-base">
              <li>Butter and stick margarine - less than 1 tablespoon per day</li>
              <li>Cheese - less than 1 serving per week</li>
              <li>Red meat - less than 4 servings per week</li>
              <li>Fried and fast food - less than 1 time per week</li>
              <li>Pastries and sweets - less than 5 servings per week</li>
            </ul>
            <p className="text-base">
              Perfect score: 15/15. Strong target: 8.5+ is often considered top-tier adherence. Moderate target: around
              7-8 can still provide meaningful protection.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">If you want consistency, track your meals</h2>
          <p className="text-base">Tracking is not about being strict. It is about reducing mental load.</p>
          <p className="text-base">
            When you write meals down, you stop forcing your brain to keep everything in working memory while cravings are
            competing for attention. Tracking turns decision fatigue into a simple system.
          </p>
          <p className="text-base">Simple ways to do it:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Notes app: date - meals - checkboxes (leafy greens, berries, whole grains)</li>
            <li>A paper checklist on the fridge</li>
            <li>A weekly MIND score every Sunday</li>
          </ul>
          <p className="text-base">
            The more you track, the more automatic good eating becomes. And the more automatic it becomes, the less you
            need willpower.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The bottom line</h2>
          <p className="text-base">
            If the Savage is always craving, your focus will always be fragile. If you feed your brain consistently with
            stable, nutrient-dense food, the Savage quiets down and the Tamer can do its job.
          </p>
          <p className="text-base">
            Focus becomes less about forcing yourself to concentrate and more about building a system where concentrating
            is the default.
          </p>
          <p className="text-base">
            If you want, paste what you ate yesterday (just one day). I will score it on the 15-point MIND system and
            suggest the easiest upgrades to raise your score fast.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: 'stress-is-not-the-enemy-chronic-stress-is',
    title: 'Stress Is Not the Enemy. Chronic Stress Is.',
    description:
      'Stress can improve performance in short bursts—but unmanaged, long-term stress harms memory, mood, and focus. Here’s how to tell the difference and what actually helps.',
    thumbnailSrc: '/stress.png',
    thumbnailAlt: 'Person holding their head with the word “Stress” in the background',
    publishedAt: '2026-01-14',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Stress is not the enemy. Chronic stress is.</h2>
          <p className="text-base">
            Stress has a bad reputation, but not all stress is harmful. In fact, some stress is necessary for performance,
            learning, and survival.
          </p>
          <p className="text-base">
            The real problem is not stress itself. It is unmanaged, long-term stress. Understanding the difference matters
            more than trying to eliminate stress entirely.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Short-term stress can be helpful</h2>
          <p className="text-base">
            Short bursts of stress sharpen focus and increase alertness. This is called acute stress.
          </p>
          <p className="text-base">Examples include:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Preparing for a presentation</li>
            <li>Exercising intensely</li>
            <li>Reacting quickly to danger</li>
          </ul>
          <p className="text-base">
            In these moments, stress hormones like cortisol and adrenaline temporarily improve attention and energy. This
            is why deadlines sometimes make you more productive.
          </p>
          <p className="text-base">The issue begins when stress never turns off.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Chronic stress harms memory</h2>
          <p className="text-base">
            When stress becomes constant, cortisol stays elevated. High cortisol over long periods damages the
            hippocampus, the part of the brain responsible for memory and learning.
          </p>
          <p className="text-base">Effects of chronic stress include:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Difficulty concentrating</li>
            <li>Weaker memory formation</li>
            <li>Increased mental fatigue</li>
          </ul>
          <p className="text-base">
            This is why people under constant stress often feel mentally slow, even if they are working harder.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Breathing directly affects stress levels</h2>
          <p className="text-base">Breathing is one of the fastest ways to influence your nervous system.</p>
          <p className="text-base">
            Shallow, rapid breathing signals danger to the brain and increases stress. Slow, deep breathing does the
            opposite.
          </p>
          <p className="text-base">
            Especially effective is longer exhalation than inhalation. It activates the parasympathetic nervous system,
            which lowers heart rate and reduces cortisol.
          </p>
          <p className="text-base">This is not a mindset trick. It is physiology.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Exercise reduces cortisol over time</h2>
          <p className="text-base">
            Exercise temporarily increases cortisol, but consistently lowers baseline stress levels.
          </p>
          <p className="text-base">Regular movement:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Improves cortisol regulation</li>
            <li>Increases stress resilience</li>
            <li>Improves mood and sleep quality</li>
          </ul>
          <p className="text-base">
            The key is consistency, not intensity. Even walking has measurable effects on stress hormones.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Sleep lowers stress sensitivity</h2>
          <p className="text-base">
            Sleep does not just reduce stress. It changes how sensitive you are to stress.
          </p>
          <p className="text-base">When sleep-deprived:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Cortisol spikes faster</li>
            <li>Emotional reactions are stronger</li>
            <li>Small problems feel overwhelming</li>
          </ul>
          <p className="text-base">
            Quality sleep restores emotional regulation and keeps stress responses proportional to reality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The goal is not zero stress</h2>
          <p className="text-base">A stress-free life is neither possible nor desirable.</p>
          <p className="text-base">The goal is:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Short-term stress that turns off</li>
            <li>Recovery through sleep, movement, and breathing</li>
            <li>Avoiding chronic, unresolved stress</li>
          </ul>
          <p className="text-base">
            Stress becomes dangerous only when it becomes permanent.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: 'asset-based-economy-vs-consumption-based-economy',
    title: 'Asset-Based Economy vs Consumption-Based Economy',
    description:
      'Most people optimize for earning and spending, but the modern economy rewards ownership—here’s the difference between consumption and assets, and why compounding matters.',
    thumbnailSrc: '/consumption%20vs%20asset.png',
    thumbnailAlt: 'Assets grow vs money flows (consumption vs asset economy)',
    publishedAt: '2026-01-12',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Asset-based economy vs consumption-based economy</h2>
          <p className="text-base">Why ownership matters more than spending.</p>
          <p className="text-base">
            Most people are taught that working harder and spending wisely leads to financial security. In reality, the
            modern economy rewards ownership, not consumption.
          </p>
          <p className="text-base">
            To understand why, you need to understand the difference between a consumption-based economy and an
            asset-based economy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What is a consumption-based economy?</h2>
          <p className="text-base">A consumption-based economy runs on spending.</p>
          <p className="text-base">
            People exchange time for money, then money for goods and services. Economic growth depends on consumers buying
            more—food, housing, subscriptions, entertainment, and lifestyle upgrades.
          </p>
          <p className="text-base">In this system:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Income is tied to labor</li>
            <li>Money is spent once</li>
            <li>Purchasing power declines over time</li>
          </ul>
          <p className="text-base">
            If people stop spending, the economy slows. This is why consumer confidence, credit, and stimulus are
            constantly emphasized.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What is an asset-based economy?</h2>
          <p className="text-base">An asset-based economy runs on ownership.</p>
          <p className="text-base">
            Capital is used to buy or create assets that appreciate or generate cash flow—stocks, real estate, businesses,
            private equity, hedge funds, intellectual property, and digital assets.
          </p>
          <p className="text-base">In this system:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Income is tied to capital</li>
            <li>Money is reinvested, not consumed</li>
            <li>Wealth compounds over time</li>
          </ul>
          <p className="text-base">This is where long-term wealth is actually created.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Where most capital really lives</h2>
          <p className="text-base">
            Only a small percentage of people own the majority of capital in the world.
          </p>
          <p className="text-base">
            That capital is not used to buy material goods. It is deployed into assets. Hedge funds, institutional
            portfolios, venture capital, and private markets recycle capital continuously instead of spending it.
          </p>
          <p className="text-base">
            More than 90 percent of global capital operates inside the asset-based economy, not the consumption-based
            economy.
          </p>
          <p className="text-base">
            Most people never interact with this layer. They live in the consumption layer—wages in, expenses out. The
            asset layer sits above it, quietly compounding.
          </p>
          <p className="text-base">This creates a structural divide:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Consumers spend money once</li>
            <li>Asset owners deploy money repeatedly</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Why money is losing value</h2>
          <p className="text-base">The value of money decreases when it is not invested.</p>
          <p className="text-base">
            Inflation does not just make things more expensive. It makes idle money weaker. Cash held in checking accounts
            or used only for consumption steadily loses purchasing power.
          </p>
          <p className="text-base">
            Asset owners protect themselves by converting money into assets designed to outpace inflation. As governments
            create more money, that money flows first into assets, not everyday goods.
          </p>
          <p className="text-base">This explains why:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Wages struggle to keep up</li>
            <li>Asset prices rise faster than inflation</li>
            <li>The wealth gap continues to widen</li>
          </ul>
          <p className="text-base">
            It is not just that things cost more. Money itself is worth less unless it is positioned inside the
            asset-based economy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Compounding vs resetting</h2>
          <p className="text-base">Consumption resets to zero.</p>
          <p className="text-base">
            You work, you earn, you spend, and the cycle restarts. No matter how efficient you are, the system requires
            constant input.
          </p>
          <p className="text-base">Assets compound.</p>
          <p className="text-base">
            They grow while you work, while you sleep, and even when you stop working. Over time, compounding creates
            outcomes that labor alone cannot match.
          </p>
          <p className="text-base">
            This is why effort feels increasingly disconnected from results for many people.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The system is not broken</h2>
          <p className="text-base">The economy is not failing. It is functioning exactly as designed.</p>
          <p className="text-base">It rewards:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Ownership over labor</li>
            <li>Capital over consumption</li>
            <li>Reinvestment over spending</li>
          </ul>
          <p className="text-base">
            Technology has lowered the barrier to asset ownership—stocks, global markets, digital products, software,
            content, and small online businesses are more accessible than ever.
          </p>
          <p className="text-base">
            But behavior has not changed. Most people still optimize their lives around consumption, not ownership.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The practical takeaway</h2>
          <p className="text-base">You do not need to stop consuming.</p>
          <p className="text-base">You need to start owning.</p>
          <p className="text-base">
            Even small assets change incentives. A single stock, a side project, equity in a product, or ownership of
            something that compounds shifts you from participant to owner.
          </p>
          <p className="text-base">The asset-based economy already exists. Most capital already lives there.</p>
          <p className="text-base">
            The only real question is whether you are positioned to benefit from it—or remain trapped in the consumption
            loop.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: 'is-working-in-bed-bad-for-productivity',
    title: 'Is working in bed bad for productivity?',
    description:
      'Working in bed feels convenient, but it often reduces focus, weakens structure, and can even hurt sleep—here’s when to avoid it and when it can be okay.',
    thumbnailSrc: '/Bed.webp',
    thumbnailAlt: 'Person working on a laptop in bed',
    publishedAt: '2026-01-07',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Is working in bed bad for productivity?</h2>
          <p className="text-base">
            Working in bed feels convenient, but for most people, it significantly reduces productivity. Your brain
            associates bed with rest and sleep, not focus. As a result, concentration drops, distractions increase, and it
            becomes harder to do meaningful work.
          </p>
          <p className="text-base">Here is when and why working in bed hurts productivity.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Why working in bed reduces focus and productivity</h2>
          <p className="text-base">
            Your brain is highly context-dependent. Over time, it learns that bed equals rest, recovery, and sleep. When
            you try to work in that same environment, your brain receives mixed signals.
          </p>
          <p className="text-base">
            This often leads to mental fog, slower thinking, and reduced motivation. It is not a discipline problem. It is
            environmental conditioning.
          </p>
          <p className="text-base">
            If your work requires deep focus or creative thinking, bed actively works against you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Poor posture lowers energy and attention</h2>
          <p className="text-base">Productivity is not only cognitive. It is physical.</p>
          <p className="text-base">
            Working in bed usually means slouching or lying down. This restricts breathing, reduces oxygen flow, and
            lowers alertness. Neck and back strain also build up faster, which quietly drains energy throughout the
            session.
          </p>
          <p className="text-base">Even if you feel comfortable at first, output typically declines quickly.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Working in bed weakens task structure</h2>
          <p className="text-base">Structure supports focus. Bed removes it.</p>
          <p className="text-base">
            When you work in bed, it becomes easier to check your phone, scroll, or switch tasks. There is no clear
            boundary between working and resting, which makes it harder to build momentum or stay engaged.
          </p>
          <p className="text-base">
            This is especially damaging for tasks that require sustained attention or problem-solving.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Working in bed can hurt sleep quality</h2>
          <p className="text-base">One of the biggest hidden downsides is sleep.</p>
          <p className="text-base">
            If you regularly work, think, or stress in bed, your brain starts associating that space with activity instead
            of rest. This can make it harder to fall asleep and reduce sleep quality over time.
          </p>
          <p className="text-base">Poor sleep then feeds directly into lower productivity the next day.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">When you should not work in bed</h2>
          <p className="text-base">Working in bed is especially unproductive when:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>You need deep focus</li>
            <li>The task requires creative thinking</li>
            <li>You are already mentally tired</li>
            <li>Sleep quality matters later that night</li>
          </ul>
          <p className="text-base">
            On low-energy days, bed often amplifies fatigue instead of fixing it. A change of environment is usually more
            effective than pushing through from bed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">When working in bed can be okay</h2>
          <p className="text-base">Working in bed is not always bad.</p>
          <p className="text-base">It can work for:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Casual reading</li>
            <li>Journaling</li>
            <li>Light reflection</li>
            <li>Outlining ideas without pressure</li>
          </ul>
          <p className="text-base">
            The key is intention. Once you expect real output, bed stops being a neutral environment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The takeaway</h2>
          <p className="text-base">
            Productivity depends heavily on environment. Bed is optimized for rest, not execution.
          </p>
          <p className="text-base">
            Separating where you work from where you sleep helps protect both focus and recovery. Even small environmental
            boundaries can noticeably improve productivity over time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">FAQ</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Can you be productive working in bed?</h3>
            <p className="text-base">
              For most people, only for low-effort tasks. Bed is not suitable for deep or focused work.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Is working in bed bad for sleep?</h3>
            <p className="text-base">
              Yes. Mixing work and rest in the same space can reduce sleep quality and make it harder to fall asleep.
            </p>
          </div>
        </section>
      </div>
    ),
  },
  {
    slug: 'junk-food-and-performance-how-your-diet-affects-focus-and-energy',
    title: 'Junk Food and Performance: How Your Diet Affects Focus and Energy',
    description:
      'Junk food impacts more than long-term health—it can quietly reduce daily focus, mood, energy, and physical performance through spikes, crashes, and nutrient gaps.',
    thumbnailSrc: '/junk%20food%20and%20performance%20.png',
    thumbnailAlt: 'Junk food and performance thumbnail',
    publishedAt: '2025-12-31',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Junk food and performance: what you eat shapes how you think and move</h2>
          <p className="text-base">
            Most people know junk food is not great for long-term health. What is talked about less is how strongly it
            affects daily performance. Not just in sports, but in focus, energy, mood, and decision-making.
          </p>
          <p className="text-base">
            If you have ever felt sluggish after fast food, unfocused after sugary snacks, or mentally foggy during an
            afternoon work session, food is likely part of the reason.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What counts as junk food?</h2>
          <p className="text-base">
            Junk food usually refers to foods that are high in sugar, refined carbohydrates, unhealthy fats, and artificial
            additives, while being low in nutrients. Examples include:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Sugary drinks and energy drinks</li>
            <li>Candy and pastries</li>
            <li>Fast food burgers and fries</li>
            <li>Chips and heavily processed snacks</li>
          </ul>
          <p className="text-base">
            These foods are designed to be tasty and convenient, but they are not designed to support sustained
            performance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Energy spikes and crashes</h2>
          <p className="text-base">
            Junk food often causes rapid spikes in blood sugar. At first, this can feel like a burst of energy. Shortly
            after, blood sugar drops, leading to fatigue, irritability, and reduced concentration.
          </p>
          <p className="text-base">
            This cycle is especially harmful for tasks that require sustained focus, such as studying, coding, writing, or
            strategic thinking. Instead of steady energy, your brain is constantly adjusting to highs and lows.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Impact on focus and cognition</h2>
          <p className="text-base">
            Your brain uses a large amount of energy and depends on stable glucose levels and nutrients to function well.
            Diets high in junk food are linked to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Reduced attention span</li>
            <li>Slower reaction times</li>
            <li>Poorer memory and learning</li>
            <li>Increased brain fog</li>
          </ul>
          <p className="text-base">
            Highly processed foods also tend to be low in omega-3 fats, vitamins, and minerals that support brain health.
            Over time, this can subtly but consistently reduce cognitive performance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Mood and motivation</h2>
          <p className="text-base">
            Food affects mood more than many people realize. Frequent junk food consumption is associated with increased
            feelings of anxiety, irritability, and low motivation.
          </p>
          <p className="text-base">
            When energy levels swing up and down, motivation often follows the same pattern. This makes it harder to start
            tasks, stick with difficult work, or maintain discipline over long periods.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Physical performance and recovery</h2>
          <p className="text-base">For physical performance, the effects are even more visible. Junk food can lead to:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Lower endurance</li>
            <li>Slower recovery after workouts</li>
            <li>Increased inflammation</li>
            <li>Reduced muscle repair</li>
          </ul>
          <p className="text-base">
            Athletic performance depends on consistent fuel, hydration, and nutrients. Junk food may provide calories, but
            it does not provide quality fuel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Why consistency matters more than perfection</h2>
          <p className="text-base">
            This does not mean you need to eat perfectly all the time. Performance is shaped by patterns, not single meals.
            An occasional treat will not ruin your focus or fitness.
          </p>
          <p className="text-base">
            Problems arise when junk food becomes the default rather than the exception. Over time, small daily choices
            compound into noticeable performance gaps.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Better food, better output</h2>
          <p className="text-base">
            People often look for productivity hacks, supplements, or new tools to improve performance. Diet is one of the
            simplest and most overlooked levers.
          </p>
          <p className="text-base">
            Eating foods that provide steady energy, such as whole grains, protein, fruits, vegetables, and healthy fats,
            supports clearer thinking, better mood, and more consistent output throughout the day.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Final thought</h2>
          <p className="text-base">
            Performance is not just about willpower or talent. It is also about inputs. Junk food makes performance harder
            than it needs to be.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: 'how-context-switching-hurts-productivity-and-focus',
    title: 'How Context Switching Hurts Productivity and Focus',
    description:
      'Why switching tasks feels productive but quietly drains focus—plus practical ways to reduce the cognitive penalty.',
    thumbnailSrc: '/contextswitching%20.png',
    thumbnailAlt: 'Illustration about choosing between plans (context switching thumbnail)',
    publishedAt: '2025-12-29',
    render: () => (
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Context switching and cognitive penalties</h2>
          <p className="text-base">
            We like to think we are good at multitasking. Slack open, email notifications popping up, a doc on one screen
            and Twitter on the other. It feels productive. In reality, our brain pays a hidden cost every time we switch
            tasks. This cost is called a cognitive penalty.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What is context switching</h2>
          <p className="text-base">
            Context switching is when your attention moves from one task to another. Replying to a message while writing
            code. Checking email in the middle of studying. Jumping between tabs while drafting an article.
          </p>
          <p className="text-base">
            The switch itself seems small, but your brain has to drop one mental model and load another. That reload
            takes time and energy, even if the interruption is short.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">What are cognitive penalties</h2>
          <p className="text-base">A cognitive penalty is the mental cost of switching tasks. It shows up in a few ways:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>It takes longer to get back into deep focus</li>
            <li>You make more small mistakes</li>
            <li>Your thinking becomes more shallow</li>
            <li>You feel mentally tired faster</li>
          </ul>
          <p className="text-base">
            Even after you return to the original task, part of your attention is still stuck on the previous one. That
            leftover attention is called attention residue. It is one reason why work feels harder than it should.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Why it hurts productivity more than you think</h2>
          <p className="text-base">The biggest damage is not the interruption itself. It is the recovery time.</p>
          <p className="text-base">
            You might glance at a notification for 10 seconds, but it can take several minutes to fully regain your
            previous level of focus. If this happens dozens of times a day, the lost time quietly adds up.
          </p>
          <p className="text-base">
            Context switching also breaks flow. Flow is the state where ideas connect naturally and work feels smooth.
            Frequent switches prevent you from ever getting there.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">A real world perspective from Elon Musk</h2>
          <p className="text-base">
            One interesting way to think about context switching is to hear how leaders with heavy workloads talk about
            it. In a recent interview, Elon Musk said he tries to segment his days so that there is not too much switching
            between tasks because, as he put it, “arguably fear is not the mind killer. context switching is.” That phrase
            highlights how harmful constant switching can be for focus and productivity.
          </p>

          <div className="space-y-2">
            <p className="text-base">
              Here is the video where Musk explains his average day (go to 10:50 to hear the quote):
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/bz5Hjk40FD4?start=650"
                title="Elon Musk on managing his day and context switching"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-gray-600">
              Prefer a link?{' '}
              <a
                className="underline"
                href="https://www.youtube.com/watch?v=bz5Hjk40FD4&t=650s"
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube (starts at 10:50)
              </a>
            </p>
          </div>

          <p className="text-base">
            When you skip to 10:50, you can hear exactly how he explains the cognitive load of dealing with multiple
            priorities and why he tries to structure his time intentionally instead of reacting to every new input.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Common sources of context switching</h2>
          <p className="text-base">Most context switching is not accidental. It is built into how we work today.</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Chat apps and constant notifications</li>
            <li>Email checking out of habit</li>
            <li>Meetings that fragment the day</li>
            <li>Open-plan or digital workspaces</li>
            <li>Social media used as a quick break</li>
          </ul>
          <p className="text-base">Even productive tools can become distractions if they interrupt at the wrong time.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">How to reduce the cognitive penalty</h2>
          <p className="text-base">
            You do not need to eliminate switching completely. You just need to control it.
          </p>
          <p className="text-base">Some practical ways to do that:</p>
          <ul className="list-disc pl-6 space-y-1 text-base">
            <li>Batch similar tasks together</li>
            <li>Turn off non essential notifications</li>
            <li>Check email at set times instead of constantly</li>
            <li>Work in focused blocks of 30 to 90 minutes</li>
            <li>Keep a short list of what you were doing before switching</li>
          </ul>
          <p className="text-base">
            One simple trick is to write a one-line note before you switch tasks. When you come back, that note helps
            your brain reload faster.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Switching is sometimes necessary</h2>
          <p className="text-base">
            Not all context switching is bad. Collaboration, quick decisions, and real emergencies matter. The goal is
            not zero switching. The goal is intentional switching.
          </p>
          <p className="text-base">
            When you choose when to switch, instead of reacting automatically, the cognitive penalty drops.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">The takeaway</h2>
          <p className="text-base">
            Productivity is not about doing more things at once. It is about protecting your attention.
          </p>
          <p className="text-base">
            Every time you switch context, your brain pays a tax. Reduce the number of switches, and the quality of your
            work improves. Work feels lighter. Thinking gets clearer. And you often finish faster, even though it feels
            slower at first.
          </p>
          <p className="text-base">Focus is not a talent. It is an environment you design.</p>
        </section>
      </div>
    ),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}


