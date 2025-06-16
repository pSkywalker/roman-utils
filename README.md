<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Roman Utils</h1>

  <p>A lightweight and flexible TypeScript utility for converting between Roman numerals and integers. Easily convert numbers in both directions while optionally tracking conversion history.</p>

  <h2>✨ Features</h2>
  <ul>
    <li>Convert <strong>Roman numerals</strong> to <strong>integers</strong></li>
    <li>Convert <strong>integers</strong> to <strong>Roman numerals</strong></li>
    <li>Optional history tracking of all conversions</li>
    <li>Simple API with strong typing</li>
  </ul>

  <h2>📦 Installation</h2>
  <pre><code>npm install roman-utils
</code></pre>
  <p>Or with Yarn:</p>
  <pre><code>yarn add roman-utils
</code></pre>

  <h2>🚀 Usage</h2>
  <pre><code>import { RomanUtils } from 'roman-utils';

const utils = new RomanUtils(true); // <code>true</code> enables history recording

// Integer to Roman
const result1 = utils.parse(1999);
console.log(result1); 
// { direction: 'intToRoman', romanNumber: 'MCMXCIX', intNumber: 1999 }

// Roman to Integer
const result2 = utils.parse('XLII');
console.log(result2);
// { direction: 'romanToInt', romanNumber: 'XLII', intNumber: 42 }

// Access conversion history
console.log(utils.record);

// Clear history
utils.clearHistory();
</code></pre>

  <h2>🧠 API Reference</h2>
  <h3><code>new RomanUtils(keepRecord: boolean = true)</code></h3>
  <p>Creates an instance of the converter.</p>
  <ul>
    <li><code>keepRecord</code> (optional): Whether to keep a history of conversions.</li>
  </ul>

  <h3><code>parse(input: string | number): RomanConversionRecord</code></h3>
  <p>Parses either a Roman numeral (as a string) or an integer (as a number) and returns a conversion record.</p>

  <h3><code>clearHistory(): void</code></h3>
  <p>Clears the internal history record.</p>

  <h3><code>record: RomanConversionRecord[]</code></h3>
  <p>An array of all previous conversions (if history is enabled).</p>

  <h2>🧱 Types</h2>
  <pre><code>type ConversionDirection = 'romanToInt' | 'intToRoman';

type RomanConversionRecord = {
    direction?: ConversionDirection;
    romanNumber?: string;
    intNumber?: number;
};
</code></pre>

  <h2>📁 Project Structure</h2>
  <pre><code>roman-utils/
├── req/
│   ├── IntToRoman.ts
│   └── RomanToInt.ts
├── RomanUtils.ts
</code></pre>

  <h2>🛠 Dependencies</h2>
  <p>No external runtime dependencies.</p>

  <h2>📄 License</h2>
  <p>MIT License. See <a href="./LICENSE">LICENSE</a> for details.</p>

  <hr />

  <p>Made with ❤️ by <a href="https://github.com/pSkywalker">@pSkywalker</a></p>
</body>
</html>
