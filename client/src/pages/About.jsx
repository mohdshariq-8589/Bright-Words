import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="flex items-center justify-center my-2">
          <div className="max-w-3xl mx-auto p-3">
            <h1 className="text-3xl md:text-4xl font-semibold text-center my-5">
              About BrightWords
            </h1>
            <div className="text-lg flex flex-col gap-4">
              <p>
                Welcome to <span className="text-blue-500">BrightWords</span>!
                This blog is a place to share thoughts and ideas about
                technology, coding, and everything in between.
              </p>

              <p>
                Here you’ll find articles and tutorials on web development,
                software engineering, and programming languages. New
                technologies and concepts are explored regularly, so check back
                often for fresh content.
              </p>

              <p>
                Feel free to leave comments on posts and engage with other
                readers. You can like and reply to comments as well. A community
                of learners helps everyone grow and improve together.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
