export default function JoinUsBanner() {
  const handleJoin = () => {
    document
      .getElementById("career-application")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="text-white py-10"
      style={{
        background:
          "linear-gradient(90deg, #6d28d9 0%, #4c1fe0 55%, #3b19d9 100%)",
      }}
    >
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Ready to Grow With Us?
          </h2>

          <p className="text-sm md:text-[15px] leading-relaxed max-w-2xl text-white/85">
            Whether you are starting your career or looking for your next
            technical challenge, Work Science offers opportunities to learn,
            contribute, collaborate, and work on meaningful technology
            projects.
          </p>
        </div>

        <button
          onClick={handleJoin}
          className="btn-pill border border-white text-white text-[11px] px-6 py-3 uppercase shrink-0 hover:bg-white hover:text-[#3b19d9] transition-colors"
        >
          Join Work Science
        </button>
      </div>
    </section>
  );
}