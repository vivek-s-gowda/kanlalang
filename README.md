<h1 align="center">Kanla Lang</h1>
<p align="center">
<a href="https://www.npmjs.com/package/kanlalang"><img alt="Build" src="https://img.shields.io/badge/npm-kanlalang-orange"/></a>

</p>
<p align="center">
  <b>Kanla lang is a fun programming language forked from Gurulang :). Which is similar to Hassan, Mandya accent </b>
</p>
<p align="center">
<!-- Do checkout the online <a href="https://sheshavpd.github.io/gurulang/">Guru Lang PlayGround</a>. -->
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g kanlalang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.kanla</code>)</h4>


<h4 align="left">Edit the file with a text editor.

```
enla
  hel la "Hello kanla";
aythu kanla

```

<h4 align="left">Run</h4>

```
kanlalang test.kanla
```

<h4 align="left">Output</h4>

```
Hello kanla
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>enla</code> is the entrypoint for the program and all program must end with <code>aythu kanla</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

enla
// Write code here
aythu kanla

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>nod la</code>.</p>

```

enla
  nod la a = 10;
  nod la b = "two";
  nod la c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
aythu kanla
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>kaali</code>. <code>nija</code> and <code>sullu</code> are the boolean values.</p>

```

enla
  nod la a = 10;
  nod la b = 10 + (15*20);
  nod la c = "two";
  nod la d = 'ok';
  nod la e = kaali;
  nod la f = nija;
  nod la g = sullu;
aythu kanla
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>hel la</code> to print anything to console.</p>

```

enla
  hel la "Hello World";
  nodla a = 10;
  {
    nodla b = 20;
    hel la a + b;
  }
  hel la 5, 'ok' , nija , sullu;
aythu kanla
```

<h3 align="center">Conditionals</h3>
<p align="center">Kanlalang supports simple if else construct , <code>nodla eega</code> block will execute if condition is <code>nija</code> and <code>illandre nodla</code> block will execute if condition is <code>sullu</code>.</p>

```

enla
  nod la a = 10;
  nodla eega (a < 25) aadre{
   hel la "a is less than 25";
  } illandre nodla {
   hel la "a is greater than or equal to 25";
  }
aythu kanla
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>nodla ellivargu</code> blocks are executed as long as a specified condition evaluates to nija. If the condition becomes <code>sullu</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>saak bidla</code> to break the loop and <code className="language-cpp">mundhe nodla</code> to continue within loop.</p>


```

enla
  nod la a = 0;
  madla ellivargu (a < 10) {
   a += 1;
  nodla eega (a == 5) aadre{
    hel la "olaginda hella ", a;
    mundhe nodla;
   }
  nodla eega (a == 6) aadre{
    saak bidla;
   }
   hel la a;
  }
  hel la "done";
aythu kanla
```











