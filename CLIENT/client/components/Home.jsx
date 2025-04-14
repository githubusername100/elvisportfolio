

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Welcome to My Portfolio!</h1>
        <p>Thank you for visiting! Feel free to explore and learn more about me.</p>
      </header>

      {/* Main Content */}
      <main style={{ marginTop: '80px' }}> {/* Added margin-top here */}
        <section className="buttons">
          <a href="about-me.html" className="button">Learn More About Me</a>
        </section>

        {/* Mission Statement Section */}
        <section className="mission-statement">
          <h2>Mission Statement</h2>
          <p>As a software engineer passionate about innovation, I specialize in developing intelligent, efficient, and user-centric solutions. From automation to Al-driven applications, my goal is to create technology that optimizes processes, enhances experiences, and solves real-world problems. This portfolio showcases my work, projects, and insights-connecting ideas with impact.</p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Elvis J</p>
      </footer>
    </div>
  );
}



  