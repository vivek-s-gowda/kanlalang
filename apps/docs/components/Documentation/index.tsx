import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">enla</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">aythu kanla</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

enla
  // Write code here
aythu kanla

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">nod la</code>.
      </>
    ),
    code: `enla
      nod la a = 10;
      nod la b = "two";
      nod la c = 15;
      a = a + 1;
      b = 21;
      c *= 2;
aythu kanla
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">kaali</code>.{" "}
        <code className="language-cpp">nija</code> and{" "}
        <code className="language-cpp">sullu</code> are the boolean values.
      </>
    ),
    code: `enla
    nod la a = 10;
    nod la b = 10 + (15*20);
    nod la c = "two";
    nod la d = 'ok';
    nod la e = kaali;
    nod la f = nija;
    nod la g = sullu;
aythu kanla
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">hel la</code> to print anything to
        console.
      </>
    ),
    code: `enla
    hel la "Hello World";
    nod la a = 10;
    {
       nod la b = 20;
       hel la a + b;
    }
    hel la 5, 'ok', kaali , nija , sullu;
aythu kanla
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Kanlalang supports simple if else construct , <code className="language-cpp">nodla eega</code> block will execute if condition is <code className="language-cpp">nija</code> and <code className="language-cpp">illandre nodla</code> block will execute if condition is <code className="language-cpp">sullu</code>.
      </>
    ),
    code: `enla
    nod la a = 10;
    nodla eega (a < 25) aadre{
      hel la "a is less than 25";
    } illandre nodla {
      hel la "a is greater than or equal to 25";
    }
aythu kanla
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">madla ellivargu</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">nija</code>. If the condition becomes <code className="language-cpp">sullu</code>, statement within the loop stops executing and control passes to the statement following the loop.
        Use <code className="language-cpp">saak bidla</code> to break the loop and <code className="language-cpp">mundhe madla</code> to continue within loop.
      </>
    ),
    code: `enla
    nod la a = 0;
    madla ellivargu (a < 10) {
      a += 1;
      nodla eega (a == 5) aadre{
        hel la "olgade aithe kanla ", a;
        mundhe nodla;
      }
      nodla eega (a == 6) aadre{
        saak bidla;
      }
      hel la a;
    }
    hel la "done";
aythu kanla
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            Kanla lang is a fun programming language, forked from Gurulang. Which is similar to Hassan, Mandya accent
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
