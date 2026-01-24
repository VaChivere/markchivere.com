export default function HowIWork() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Header Column */}
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-midnight-blue mb-6">
              How I Work
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I don't deliver generic AI training. My approach is rooted in human behavior, ensuring that technology serves your goals, not the other way around.
            </p>
            <div className="h-1 w-20 bg-royal-purple rounded-full"></div>
          </div>

          {/* Points Column 1 */}
          <div className="space-y-10">
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Contextual</h3>
              <p className="text-gray-600 leading-relaxed">
                Every engagement is contextual to your leadership and operating model. No cookie-cutter solutions—only what fits your reality.
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Science-Grounded</h3>
              <p className="text-gray-600 leading-relaxed">
                Grounded in human behaviour and decision science. We work with how brains actually function, reducing resistance to change.
              </p>
            </div>
          </div>

          {/* Points Column 2 */}
          <div className="space-y-10">
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Outcome-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Focused on measurable performance outcomes. AI is introduced only where it improves clarity, speed, or quality.
              </p>
            </div>
            
            <div className="group">
              <h3 className="text-xl font-bold text-midnight-blue mb-3 group-hover:text-royal-purple transition-colors">Human-First</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology is the tool; people are the engine. We prioritize psychological safety and trust in every digital transformation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
