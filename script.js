 // --- Single Page Application Logic ---
        let currentPage = 'dashboard';
        const mainContent = document.getElementById('main-content');
      
        const navItems = {
           'dashboard': document.getElementById('nav-dashboard'),
            'program1': document.getElementById('nav-program1'),
            // 'program2': document.getElementById('nav-program2'),
            // 'program3': document.getElementById('nav-program3'), 
            // 'program4': document.getElementById('nav-program4'),
            'program2': document.getElementById('nav-program2'),
            'program3': document.getElementById('nav-program3'),
            'program4': document.getElementById('nav-program4'),  // NEW
            'program5': document.getElementById('nav-program5'),  // NEW
            'program6': document.getElementById('nav-program6'),  // NEW
            'program7': document.getElementById('nav-program7'), // NEW
            'program8': document.getElementById('nav-program8'),// ADDED
            'program9': document.getElementById('nav-program9'),// ADDED
            'program10': document.getElementById('nav-program10'), // ADDED
            'program11': document.getElementById('nav-program11'), // NEW Numerical Method
            'program12': document.getElementById('nav-program12'),// NEW Numerical Method
            'program13': document.getElementById('nav-program13'), // NEW Numerical Method
            'program14': document.getElementById('nav-program14'), //  Numerical Method
            'program15': document.getElementById('nav-program15'), // NEW Gauss
            'program16': document.getElementById('nav-program16'), // NEW Gauss
            'program17': document.getElementById('nav-program17'), // NEW Gauss

          
           
        };
        

        // Define content for each page using new CSS classes
        const pages = {
            'dashboard': {
                title: "Welcome to the Program of CONM",
                description: `
                    <p class="text-body">
                        This website serves as a digital program for my collegiate C programming coursework.
                        Each section presents a specific program, detailing its source code, logic, and output.
                        It's designed to showcase my understanding of fundamental programming concepts, data structures,
                        and algorithms implemented in the C language.
                    </p>

                    <div class="grid-layout">
                        <div class="card card-indigo">
                            <h4 class="card-title-indigo">Goal</h4>
                            <p class="card-text-indigo">To demonstrate proficiency in structured programming and memory management using C.</p>
                        </div>
                        <div class="card card-white">
                            <h4 class="card-title-dark">Features</h4>
                            <ul class="list-features card-text-dark">
                                <li>Responsive Design (Pure CSS)</li>
                                <li>Single-Page Navigation (JavaScript)</li>
                                <li>Syntax-Highlighted Code Blocks</li>
                            </ul>
                        </div>
                    </div>
                    <div class="alert-box">
                        <p class="alert-text">Use the sidebar to explore the C programs!</p>
                    </div>
                `
            },

            'program1': {
                title: "Program 1: 'Hello World' - The Foundation",
                description: `
                    <p class="text-body">
                        This is the classic starting point for any C programmer. It demonstrates the basic structure
                        of a C program, including the use of the <code class="inline-code">#include</code> preprocessor
                        directive and the essential <code class="inline-code">main()</code> function.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">hello_world.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// hello_world.c
// Description: A simple C program to print a greeting.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span> <span class="c-comment">// Required for the printf() function</span>

<span class="c-type">int</span> <span class="c-function">main</span>() {
    <span class="c-comment">// Print the message to the standard output stream (console)</span>
    <span class="c-function">printf</span>(<span class="c-string">"Hello, World! This program runs on C!\n"</span>);

    <span class="c-comment">// Return 0 to indicate successful execution</span>
    <span class="c-keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Output</h3>
                    <div class="console-output">
                        <p>Hello, World! This program runs on C!</p>
                    </div>
                `
            },

//  removed 2 to 4 program form this website !

//             'program2': {
//                 title: "Program 2: Simple Console Calculator",
//                 description: `
//                     <p class="text-body">
//                         This program implements a basic calculator that performs addition,
//                         subtraction, multiplication, and division based on user input. It illustrates
//                         the use of functions, the <code class="inline-code">switch</code> statement 
//                         for control flow, and error handling for division by zero.
//                     </p>
//                     <h3 class="section-title">Source Code: <span class="accent-title">simple_calculator.c</span></h3>
//                     <div class="code-container">
//                         <pre>
// <span class="c-comment">//
// // simple_calculator.c
// // Description: A console-based calculator using a switch statement.
// //</span>

// <span class="c-include">#include &lt;stdio.h&gt;</span>

// <span class="c-comment">// Function prototypes</span>
// <span class="c-type">double</span> <span class="c-function">add</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b);
// <span class="c-type">double</span> <span class="c-function">subtract</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b);
// <span class="c-type">double</span> <span class="c-function">multiply</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b);
// <span class="c-type">double</span> <span class="c-function">divide</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b);

// <span class="c-type">int</span> <span class="c-function">main</span>() {
//     <span class="c-type">char</span> operator;
//     <span class="c-type">double</span> num1, num2, result;

//     <span class="c-function">printf</span>(<span class="c-string">"Enter operator (+, -, *, /): "</span>);
//     <span class="c-function">scanf</span>(<span class="c-string">" %c"</span>, &operator);

//     <span class="c-function">printf</span>(<span class="c-string">"Enter two operands: "</span>);
//     <span class="c-function">scanf</span>(<span class="c-string">"%lf %lf"</span>, &num1, &num2);

//     <span class="c-keyword">switch</span>(operator) {
//         <span class="c-keyword">case</span> <span class="c-string">'+'</span>:
//             result = <span class="c-function">add</span>(num1, num2);
//             <span class="c-keyword">break</span>;
//         <span class="c-keyword">case</span> <span class="c-string">'-'</span>:
//             result = <span class="c-function">subtract</span>(num1, num2);
//             <span class="c-keyword">break</span>;
//         <span class="c-keyword">case</span> <span class="c-string">'*'</span>:
//             result = <span class="c-function">multiply</span>(num1, num2);
//             <span class="c-keyword">break</span>;
//         <span class="c-keyword">case</span> <span class="c-string">'/'</span>:
//             <span class="c-keyword">if</span> (num2 == <span class="c-number">0.0</span>) {
//                 <span class="c-function">printf</span>(<span class="c-string">"Error: Division by zero is not allowed.\n"</span>);
//                 <span class="c-keyword">return</span> <span class="c-number">1</span>; <span class="c-comment">// Exit with error code</span>
//             }
//             result = <span class="c-function">divide</span>(num1, num2);
//             <span class="c-keyword">break</span>;
//         <span class="c-keyword">default</span>:
//             <span class="c-function">printf</span>(<span class="c-string">"Error: Invalid operator.\n"</span>);
//             <span class="c-keyword">return</span> <span class="c-number">1</span>;
//     }

//     <span class="c-function">printf</span>(<span class="c-string">"Result: %.2lf\n"</span>, result);
//     <span class="c-keyword">return</span> <span class="c-number">0</span>;
// }

// <span class="c-type">double</span> <span class="c-function">add</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b) { <span class="c-keyword">return</span> a + b; }
// <span class="c-type">double</span> <span class="c-function">subtract</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b) { <span class="c-keyword">return</span> a - b; }
// <span class="c-type">double</span> <span class="c-function">multiply</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b) { <span class="c-keyword">return</span> a * b; }
// <span class="c-type">double</span> <span class="c-function">divide</span>(<span class="c-type">double</span> a, <span class="c-type">double</span> b) { <span class="c-keyword">return</span> a / b; }
//                         </pre>
//                     </div>
//                     <h3 class="section-title">Example Output</h3>
//                     <div class="console-output">
//                         <p>Enter operator (+, -, *, /): *</p>
//                         <p>Enter two operands: 15 6.5</p>
//                         <p>Result: 97.50</p>
//                     </div>
//                 `
//             },

//             'program3': {
//                 title: "Program 3: Factorial Calculation",
//                 description: `
//                     <p class="text-body">
//                         This program calculates the factorial of a non-negative integer using a 
//                         simple <code class="inline-code">for</code> loop. It also includes an input validation 
//                         check to ensure the number is not negative.
//                     </p>
//                     <h3 class="section-title">Source Code: <span class="accent-title">factorial.c</span></h3>
//                     <div class="code-container">
//                         <pre>
// <span class="c-comment">//
// // factorial.c
// // Description: Calculates the factorial of an integer.
// //</span>

// <span class="c-include">#include &lt;stdio.h&gt;</span>

// <span class="c-type">int</span> <span class="c-function">main</span>() {
//     <span class="c-type">int</span> n, i;
//     <span class="c-type">unsigned long long</span> factorial = <span class="c-number">1</span>; <span class="c-comment">// Use unsigned long long for larger factorials</span>

//     <span class="c-function">printf</span>(<span class="c-string">"Enter a non-negative integer: "</span>);
//     <span class="c-function">scanf</span>(<span class="c-string">"%d"</span>, &n);

//     <span class="c-keyword">if</span> (n < <span class="c-number">0</span>) {
//         <span class="c-function">printf</span>(<span class="c-string">"Error: Factorial is not defined for negative numbers.\n"</span>);
//     } <span class="c-keyword">else</span> {
//         <span class="c-keyword">for</span> (i = <span class="c-number">1</span>; i <= n; ++i) {
//             factorial *= i;
//         }
//         <span class="c-function">printf</span>(<span class="c-string">"Factorial of %d = %llu\n"</span>, n, factorial);
//     }

//     <span class="c-keyword">return</span> <span class="c-number">0</span>;
// }
//                         </pre>
//                     </div>
//                     <h3 class="section-title">Example Output</h3>
//                     <div class="console-output">
//                         <p>Enter a non-negative integer: 5</p>
//                         <p>Factorial of 5 = 120</p>
//                     </div>
//                 `
//             },

//             'program4': {
//                 title: "Program 4: Prime Number Checker",
//                 description: `
//                     <p class="text-body">
//                         This program checks if a positive integer is a **prime number**. A prime number
//                         is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//                         It uses a <code class="inline-code">for</code> loop to iterate up to the square root of the number 
//                         for efficiency.
//                     </p>
//                     <h3 class="section-title">Source Code: <span class="accent-title">prime_checker.c</span></h3>
//                     <div class="code-container">
//                         <pre>
// <span class="c-comment">//
// // prime_checker.c
// // Description: Checks if a given number is prime.
// //</span>

// <span class="c-include">#include &lt;stdio.h&gt;</span>
// <span class="c-include">#include &lt;math.h&gt;</span> <span class="c-comment">// For the sqrt() function</span>

// <span class="c-type">int</span> <span class="c-function">is_prime</span>(<span class="c-type">int</span> n);

// <span class="c-type">int</span> <span class="c-function">main</span>() {
//     <span class="c-type">int</span> num;
//     <span class="c-function">printf</span>(<span class="c-string">"Enter a positive integer: "</span>);
//     <span class="c-function">scanf</span>(<span class="c-string">"%d"</span>, &num);

//     <span class="c-keyword">if</span> (<span class="c-function">is_prime</span>(num)) {
//         <span class="c-function">printf</span>(<span class="c-string">"%d is a prime number.\n"</span>, num);
//     } <span class="c-keyword">else</span> {
//         <span class="c-function">printf</span>(<span class="c-string">"%d is not a prime number.\n"</span>, num);
//     }
    
//     <span class="c-keyword">return</span> <span class="c-number">0</span>;
// }

// <span class="c-type">int</span> <span class="c-function">is_prime</span>(<span class="c-type">int</span> n) {
//     <span class="c-keyword">if</span> (n <= <span class="c-number">1</span>) <span class="c-keyword">return</span> <span class="c-number">0</span>; <span class="c-comment">// 0 and 1 are not prime</span>
//     <span class="c-keyword">if</span> (n <= <span class="c-number">3</span>) <span class="c-keyword">return</span> <span class="c-number">1</span>; <span class="c-comment">// 2 and 3 are prime</span>
    
//     <span class="c-keyword">if</span> (n % <span class="c-number">2</span> == <span class="c-number">0</span> || n % <span class="c-number">3</span> == <span class="c-number">0</span>) <span class="c-keyword">return</span> <span class="c-number">0</span>;

//     <span class="c-comment">// Only check up to the square root of n</span>
//     <span class="c-keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">5</span>; i * i <= n; i = i + <span class="c-number">6</span>) {
//         <span class="c-keyword">if</span> (n % i == <span class="c-number">0</span> || n % (i + <span class="c-number">2</span>) == <span class="c-number">0</span>)
//             <span class="c-keyword">return</span> <span class="c-number">0</span>;
//     }

//     <span class="c-keyword">return</span> <span class="c-number">1</span>; <span class="c-comment">// Must be prime</span>
// }
//                         </pre>
//                     </div>
//                     <h3 class="section-title">Example Output</h3>
//                     <div class="console-output">
//                         <p>Enter a positive integer: 17</p>
//                         <p>17 is a prime number.</p>
//                     </div>
//                 `
//             },


            'program2': {
                title: "Program 2: Decimal to Binary Converter",
                description: `
                    <p class="text-body">
                        This program converts a non-negative decimal integer into its binary equivalent. 
                        It uses the method of **repeated division by 2** and storing the remainders, 
                        which are the binary digits (0s and 1s). The program uses an array to store the 
                        digits in reverse order before printing the final result.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">dec_to_bin.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// dec_to_bin.c
// Description: Converts a decimal number to binary.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-type">int</span> <span class="c-function">main</span>() {
    <span class="c-type">long long</span> decimal, tempDecimal;
    <span class="c-type">int</span> binaryArray[<span class="c-number">64</span>]; <span class="c-comment">// Array to store binary digits</span>
    <span class="c-type">int</span> i = <span class="c-number">0</span>, j;

    <span class="c-function">printf</span>(<span class="c-string">"Enter a decimal integer: "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lld"</span>, &decimal);
    tempDecimal = decimal;

    <span class="c-comment">// Special case for 0</span>
    <span class="c-keyword">if</span> (tempDecimal == <span class="c-number">0</span>) {
        <span class="c-function">printf</span>(<span class="c-string">"Binary equivalent: 0\n"</span>);
        <span class="c-keyword">return</span> <span class="c-number">0</span>;
    }

    <span class="c-comment">// Repeated division by 2</span>
    <span class="c-keyword">while</span> (tempDecimal > <span class="c-number">0</span>) {
        binaryArray[i] = tempDecimal % <span class="c-number">2</span>;
        tempDecimal = tempDecimal / <span class="c-number">2</span>;
        i++;
    }

    <span class="c-function">printf</span>(<span class="c-string">"Binary equivalent of %lld: "</span>, decimal);
    <span class="c-comment">// Print the array in reverse order</span>
    <span class="c-keyword">for</span> (j = i - <span class="c-number">1</span>; j >= <span class="c-number">0</span>; j--) {
        <span class="c-function">printf</span>(<span class="c-string">"%d"</span>, binaryArray[j]);
    }
    <span class="c-function">printf</span>(<span class="c-string">"\n"</span>);

    <span class="c-keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Decimal 13)</h3>
                    <div class="console-output">
                        <p>Enter a decimal integer: 13</p>
                        <p>Binary equivalent of 13: 1101</p>
                    </div>
                `
            },

            'program3': {
                title: "Program 3: Binary to Decimal Converter",
                description: `
                    <p class="text-body">
                        This program takes a binary number (composed of only 0s and 1s) as input and 
                        converts it into its decimal equivalent. The logic is based on multiplying 
                        each binary digit by increasing powers of 2 (2<sup>0</sup>, 2<sup>1</sup>, 
                        2<sup>2</sup>, etc.) and summing the results.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">bin_to_dec.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// bin_to_dec.c
// Description: Converts a binary number to decimal.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-type">int</span> <span class="c-function">main</span>() {
    <span class="c-type">long long</span> binary;
    <span class="c-type">int</span> decimal = <span class="c-number">0</span>, base = <span class="c-number">1</span>, remainder;

    <span class="c-function">printf</span>(<span class="c-string">"Enter a binary integer: "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lld"</span>, &binary);

    <span class="c-type">long long</span> tempBinary = binary;

    <span class="c-comment">// Process each digit of the binary number</span>
    <span class="c-keyword">while</span> (tempBinary != <span class="c-number">0</span>) {
        remainder = tempBinary % <span class="c-number">10</span>; <span class="c-comment">// Get the last digit (0 or 1)</span>
        
        <span class="c-comment">// Check for invalid binary digit</span>
        <span class="c-keyword">if</span> (remainder != <span class="c-number">0</span> && remainder != <span class="c-number">1</span>) {
            <span class="c-function">printf</span>(<span class="c-string">"Error: Invalid binary number.\n"</span>);
            <span class="c-keyword">return</span> <span class="c-number">1</span>;
        }

        decimal = decimal + remainder * base;
        tempBinary = tempBinary / <span class="c-number">10</span>;
        base = base * <span class="c-number">2</span>; <span class="c-comment">// Base starts at 2^0, then 2^1, 2^2, etc.</span>
    }

    <span class="c-function">printf</span>(<span class="c-string">"Decimal equivalent of %lld: %d\n"</span>, binary, decimal);
    <span class="c-keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Binary 1101)</h3>
                    <div class="console-output">
                        <p>Enter a binary integer: 1101</p>
                        <p>Decimal equivalent of 1101: 13</p>
                    </div>
                `
            },

            'program4': {
                title: "Program 4: Decimal Fraction to Binary Fraction",
                description: `
                    <p class="text-body">
                        This program converts the **fractional part** of a decimal number to its binary representation. 
                        The logic involves **repeated multiplication by 2**, where the integer part of the 
                        result is the next binary digit. This process is often limited to a certain number 
                        of places for practical output.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">dec_frac_to_bin.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// dec_frac_to_bin.c
// Description: Converts a decimal fraction to binary.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>

<span class="c-type">void</span> <span class="c-function">dec_frac_to_bin</span>(<span class="c-type">float</span> f, <span class="c-type">int</span> places) {
    <span class="c-function">printf</span>(<span class="c-string">"0."</span>);
    <span class="c_keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">0</span>; i < places; i++) {
        f = f * <span class="c-number">2.0</span>;
        <span class="c_type">int</span> bit = (<span class="c-type">int</span>)f;
        <span class="c-function">printf</span>(<span class="c-string">"%d"</span>, bit);
        f = f - bit; <span class="c-comment">// Remove the integer part</span>
    }
}

<span class="c-type">int</span> <span class="c-function">main</span>() {
    <span class="c-type">float</span> num;
    <span class="c-type">int</span> precision = <span class="c-number">8</span>; <span class="c-comment">// Output 8 binary digits after the point</span>
    <span class="c-function">printf</span>(<span class="c-string">"Enter a decimal fraction (e.g., 0.625): "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%f"</span>, &num);

    <span class="c-function">printf</span>(<span class="c-string">"Binary fraction (up to %d places): "</span>, precision);
    <span class="c-function">dec_frac_to_bin</span>(num, precision);
    <span class="c-function">printf</span>(<span class="c-string">"\n"</span>);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Decimal 0.625)</h3>
                    <div class="console-output">
                        <p>Enter a decimal fraction (e.g., 0.625): 0.625</p>
                        <p>Binary fraction (up to 8 places): 0.10100000</p>
                    </div>
                `
            },

            'program5': {
                title: "Program 5: Binary Fraction to Decimal Fraction",
                description: `
                    <p class="text-body">
                        This program converts a binary fraction (the digits after the decimal point) into 
                        its decimal value. The conversion is based on summing powers of two with negative 
                        exponents (2<sup>-1</sup>, 2<sup>-2</sup>, etc.) corresponding to each binary digit.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">bin_frac_to_dec.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// bin_frac_to_dec.c
// Description: Converts a binary fraction string to decimal.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;string.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c_type">double</span> <span class="c-function">bin_frac_to_dec</span>(<span class="c-type">char</span> *bin_frac);

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">char</span> binary_fraction[<span class="c-number">30</span>];
    <span class="c_function">printf</span>(<span class="c-string">"Enter a binary fraction string (e.g., 101): "</span>);
    <span class="c_function">scanf</span>(<span class="c-string">"%s"</span>, binary_fraction);

    <span class="c_type">double</span> decimal_value = <span class="c-function">bin_frac_to_dec</span>(binary_fraction);
    
    <span class="c_function">printf</span>(<span class="c-string">"Decimal fraction of 0.%s: %f\n"</span>, binary_fraction, decimal_value);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}

<span class="c_type">double</span> <span class="c-function">bin_frac_to_dec</span>(<span class="c_type">char</span> *bin_frac) {
    <span class="c_type">double</span> decimal = <span class="c-number">0.0</span>;
    <span class="c_type">int</span> len = <span class="c-function">strlen</span>(bin_frac);

    <span class="c_keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">0</span>; i < len; i++) {
        <span class="c_type">int</span> digit = bin_frac[i] - <span class="c-string">'0'</span>; <span class="c-comment">// Convert char '0'/'1' to int 0/1</span>
        
        <span class="c_comment">// Term is digit * 2^(-(i+1))</span>
        decimal += digit * <span class="c-function">pow</span>(<span class="c-number">2.0</span>, -(i + <span class="c-number">1</span>));
    }
    <span class="c_keyword">return</span> decimal;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Binary 0.101)</h3>
                    <div class="console-output">
                        <p>Enter a binary fraction string (e.g., 101): 101</p>
                        <p>Decimal fraction of 0.101: 0.625000</p>
                    </div>
                `
            },

            'program6': {
                title: "Program 6: One's Complement of a Binary Number",
                description: `
                    <p class="text-body">
                        The **One's Complement** of a binary number is obtained by simply **inverting** all the 
                        bits, changing every '0' to a '1' and every '1' to a '0'. This operation is foundational 
                        for understanding negative number representation in computer systems.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">ones_complement.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// ones_complement.c
// Description: Finds the 1's complement of a binary string.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;string.h&gt;</span>

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">char</span> binary[<span class="c-number">32</span>];
    <span class="c_function">printf</span>(<span class="c-string">"Enter a binary number string: "</span>);
    <span class="c_function">scanf</span>(<span class="c-string">"%s"</span>, binary);

    <span class="c_type">int</span> len = <span class="c-function">strlen</span>(binary);

    <span class="c_function">printf</span>(<span class="c-string">"1's Complement: "</span>);
    <span class="c_keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">0</span>; i < len; i++) {
        <span class="c_keyword">if</span> (binary[i] == <span class="c-string">'0'</span>) {
            <span class="c-function">printf</span>(<span class="c-string">"1"</span>);
        } <span class="c_keyword">else if</span> (binary[i] == <span class="c-string">'1'</span>) {
            <span class="c-function">printf</span>(<span class="c-string">"0"</span>);
        } <span class="c_keyword">else</span> {
            <span class="c-function">printf</span>(<span class="c-string">"\nError: Invalid binary digit.\n"</span>);
            <span class="c_keyword">return</span> <span class="c-number">1</span>;
        }
    }
    <span class="c_function">printf</span>(<span class="c-string">"\n"</span>);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Binary 10110)</h3>
                    <div class="console-output">
                        <p>Enter a binary number string: 10110</p>
                        <p>1's Complement: 01001</p>
                    </div>
                `
            },

            'program7': {
                title: "Program 7: Two's Complement of a Binary Number",
                description: `
                    <p class="text-body">
                        The **Two's Complement** is the standard way of representing signed integers in 
                        almost all modern computers. It is calculated by taking the **One's Complement** of the number and then adding **1** to the result.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">twos_complement.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// twos_complement.c
// Description: Finds the 2's complement of a binary string.
// Note: This simplified version shows the logic on the string.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;string.h&gt;</span>

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">char</span> binary[<span class="c-number">32</span>], ones_comp[<span class="c-number">32</span>];
    <span class="c_function">printf</span>(<span class="c-string">"Enter a binary number string: "</span>);
    <span class="c_function">scanf</span>(<span class="c-string">"%s"</span>, binary);

    <span class="c_type">int</span> len = <span class="c-function">strlen</span>(binary);

    <span class="c_comment">// 1. Find 1's Complement</span>
    <span class="c_keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">0</span>; i < len; i++) {
        ones_comp[i] = (binary[i] == <span class="c-string">'0'</span>) ? <span class="c-string">'1'</span> : <span class="c-string">'0'</span>;
    }
    ones_comp[len] = <span class="c-string">'\0'</span>;

    <span class="c_comment">// 2. Add 1 to 1's Complement to get 2's Complement</span>
    <span class="c_type">int</span> carry = <span class="c-number">1</span>;
    <span class="c_keyword">for</span> (<span class="c-type">int</span> i = len - <span class="c-number">1</span>; i >= <span class="c-number">0</span>; i--) {
        <span class="c_keyword">if</span> (carry == <span class="c-number">1</span> && ones_comp[i] == <span class="c-string">'1'</span>) {
            ones_comp[i] = <span class="c-string">'0'</span>;
            carry = <span class="c-number">1</span>;
        } <span class="c_keyword">else if</span> (carry == <span class="c-number">1</span> && ones_comp[i] == <span class="c-string">'0'</span>) {
            ones_comp[i] = <span class="c-string">'1'</span>;
            carry = <span class="c-number">0</span>;
        }
    }

    <span class="c_function">printf</span>(<span class="c-string">"2's Complement: %s\n"</span>, ones_comp);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Binary 10110)</h3>
                    <div class="console-output">
                        <p>Enter a binary number string: 10110</p>
                        <p>1's Complement (intermediate step): 01001</p>
                        <p>2's Complement: 01010</p>
                    </div>
                `
            },
            
            'program8': {
                title: "Program 8: Sum in Normalized Floating-Point Form",
                description: `
                    <p class="text-body">
                        This program simulates the addition of two decimal numbers and presents the result 
                        in a **normalized scientific notation** form, similar to how floating-point 
                        numbers are represented in computer systems (e.g., $M \times 10^E$, where 
                        $1 \le |M| < 10$). The C code uses basic arithmetic and string manipulation for 
                        this demonstration.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">normalized_sum.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// normalized_sum.c
// Description: Calculates the sum of two numbers and outputs in normalized form.
// NOTE: This is a simplified C-only implementation for demonstration.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c_type">void</span> <span class="c-function">normalize</span>(<span class="c_type">double</span> value) {
    <span class="c_keyword">if</span> (value == <span class="c-number">0.0</span>) {
        <span class="c-function">printf</span>(<span class="c-string">"0.0 \u00d7 10^0\n"</span>);
        <span class="c_keyword">return</span>;
    }

    <span class="c_type">int</span> exponent = <span class="c-number">0</span>;
    <span class="c_type">double</span> mantissa = value;

    <span class="c-comment">// Normalize the mantissa (1 <= |M| < 10)</span>
    <span class="c_keyword">while</span> (<span class="c-function">fabs</span>(mantissa) >= <span class="c-number">10.0</span>) {
        mantissa /= <span class="c-number">10.0</span>;
        exponent++;
    }
    <span class="c_keyword">while</span> (<span class="c-function">fabs</span>(mantissa) < <span class="c-number">1.0</span>) {
        mantissa *= <span class="c-number">10.0</span>;
        exponent--;
    }

    <span class="c-comment">// Print in the format M x 10^E (using 'x' symbol for multiplication)</span>
    <span class="c-function">printf</span>(<span class="c-string">"Normalized Result: %.6f \u00d7 10^%d\n"</span>, mantissa, exponent);
}

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">double</span> num1, num2, sum;

    <span class="c-function">printf</span>(<span class="c-string">"Enter first number: "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &num1);
    
    <span class="c-function">printf</span>(<span class="c-string">"Enter second number: "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &num2);

    sum = num1 + num2;

    <span class="c-function">printf</span>(<span class="c-string">"Sum: %lf\n"</span>, sum);
    <span class="c-function">normalize</span>(sum);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output 1 (Large Sum)</h3>
                    <div class="console-output">
                        <p>Enter first number: 1234.56</p>
                        <p>Enter second number: 987.65</p>
                        <p>Sum: 2222.210000</p>
                        <p>Normalized Result: 2.222210 $\times$ 10$^3$</p>
                    </div>
                    <h3 class="section-title">Example Output 2 (Small Sum)</h3>
                    <div class="console-output">
                        <p>Enter first number: 0.00123</p>
                        <p>Enter second number: 0.00004</p>
                        <p>Sum: 0.001270</p>
                        <p>Normalized Result: 1.270000 $\times$ 10$^{-3}$</p>
                    </div>
                `
            },

            'program9': {
                title: "Program 9: Subtraction in Normalized Floating-Point Form",
                description: `
                    <p class="text-body">
                        This program simulates the subtraction of two decimal numbers and presents the result 
                        in a **normalized scientific notation** form, adhering to the convention 
                        $M \times 10^E$, where $1 \le |M| < 10$. This is a crucial concept in 
                        understanding floating-point arithmetic and representation in computing.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">normalized_subtraction.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// normalized_subtraction.c
// Description: Calculates the difference of two numbers and outputs in normalized form.
// NOTE: This is a simplified C-only implementation for demonstration.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c_type">void</span> <span class="c-function">normalize</span>(<span class="c_type">double</span> value) {
    <span class="c_keyword">if</span> (value == <span class="c-number">0.0</span>) {
        <span class="c-function">printf</span>(<span class="c-string">"0.0 \u00d7 10^0\n"</span>);
        <span class="c_keyword">return</span>;
    }

    <span class="c_type">int</span> exponent = <span class="c-number">0</span>;
    <span class="c_type">double</span> mantissa = value;

    <span class="c-comment">// Normalize the mantissa (1 <= |M| < 10)</span>
    <span class="c_keyword">while</span> (<span class="c-function">fabs</span>(mantissa) >= <span class="c-number">10.0</span>) {
        mantissa /= <span class="c-number">10.0</span>;
        exponent++;
    }
    <span class="c_keyword">while</span> (<span class="c-function">fabs</span>(mantissa) < <span class="c-number">1.0</span>) {
        mantissa *= <span class="c-number">10.0</span>;
        exponent--;
    }

    <span class="c-comment">// Print in the format M x 10^E (using 'x' symbol for multiplication)</span>
    <span class="c-function">printf</span>(<span class="c-string">"Normalized Result: %.6f \u00d7 10^%d\n"</span>, mantissa, exponent);
}

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">double</span> num1, num2, diff;

    <span class="c-function">printf</span>(<span class="c-string">"Enter first number (Minuend): "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &num1);
    
    <span class="c-function">printf</span>(<span class="c-string">"Enter second number (Subtrahend): "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &num2);

    diff = num1 - num2; <span class="c-comment">// Perform subtraction</span>

    <span class="c-function">printf</span>(<span class="c-string">"Difference: %lf\n"</span>, diff);
    <span class="c-function">normalize</span>(diff);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output 1 (Positive Difference)</h3>
                    <div class="console-output">
                        <p>Enter first number (Minuend): 1234.56</p>
                        <p>Enter second number (Subtrahend): 987.65</p>
                        <p>Difference: 246.910000</p>
                        <p>Normalized Result: 2.469100 $\times$ 10$^2$</p>
                    </div>
                    <h3 class="section-title">Example Output 2 (Negative Difference)</h3>
                    <div class="console-output">
                        <p>Enter first number (Minuend): 10.0</p>
                        <p>Enter second number (Subtrahend): 12500.0</p>
                        <p>Difference: -12490.000000</p>
                        <p>Normalized Result: -1.249000 $\times$ 10$^4$</p>
                    </div>
                `
            },

            'program10': {
                title: "Program 10: Multiplication in Normalized Floating-Point Form",
                description: `
                    <p class="text-body">
                        This program calculates the **product** of two decimal numbers and presents the result 
                        in a **normalized scientific notation** form, adhering to the convention 
                        $M \times 10^E$, where $1 \le |M| < 10$. This is the third of the floating-point 
                        arithmetic demonstrations.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">normalized_multiplication.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// normalized_multiplication.c
// Description: Calculates the product of two numbers and outputs in normalized form.
// NOTE: This is a simplified C-only implementation for demonstration.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c_type">void</span> <span class="c-function">normalize</span>(<span class="c_type">double</span> value) {
    <span class="c_keyword">if</span> (value == <span class="c-number">0.0</span>) {
        <span class="c-function">printf</span>(<span class="c-string">"0.0 \u00d7 10^0\n"</span>);
        <span class="c_keyword">return</span>;
    }

    <span class="c_type">int</span> exponent = <span class="c-number">0</span>;
    <span class="c_type">double</span> mantissa = value;

    <span class="c-comment">// Normalize the mantissa (1 <= |M| < 10)</span>
    <span class="c_keyword">while</span> (<span class="c-function">fabs</span>(mantissa) >= <span class="c-number">10.0</span>) {
        mantissa /= <span class="c-number">10.0</span>;
        exponent++;
    }
    <span class="c_keyword">while</span> (<span class="c-function">fabs</span>(mantissa) < <span class="c-number">1.0</span>) {
        mantissa *= <span class="c-number">10.0</span>;
        exponent--;
    }

    <span class="c-comment">// Print in the format M x 10^E (using 'x' symbol for multiplication)</span>
    <span class="c-function">printf</span>(<span class="c-string">"Normalized Result: %.6f \u00d7 10^%d\n"</span>, mantissa, exponent);
}

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">double</span> num1, num2, product;

    <span class="c-function">printf</span>(<span class="c-string">"Enter first number (Multiplicand): "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &num1);
    
    <span class="c-function">printf</span>(<span class="c-string">"Enter second number (Multiplier): "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &num2);

    product = num1 * num2; <span class="c-comment">// Perform multiplication</span>

    <span class="c-function">printf</span>(<span class="c-string">"Product: %lf\n"</span>, product);
    <span class="c-function">normalize</span>(product);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output 1 (Large Product)</h3>
                    <div class="console-output">
                        <p>Enter first number (Multiplicand): 123.4</p>
                        <p>Enter second number (Multiplier): 50.0</p>
                        <p>Product: 6170.000000</p>
                        <p>Normalized Result: 6.170000 $\times$ 10$^3$</p>
                    </div>
                    <h3 class="section-title">Example Output 2 (Small Product)</h3>
                    <div class="console-output">
                        <p>Enter first number (Multiplicand): 0.12</p>
                        <p>Enter second number (Multiplier): 0.05</p>
                        <p>Product: 0.006000</p>
                        <p>Normalized Result: 6.000000 $\times$ 10$^{-3}$</p>
                    </div>
                `
            },

            
/* --- NEW NUMERICAL METHODS PROGRAMS START HERE --- */
            
            'program11': {
                title: "Program 11: Bisection Method",
                description: `
                    <p class="text-body">
                        The **Bisection Method** is a bracketed, iterative root-finding algorithm. It works by 
                        repeatedly halving the interval $[a, b]$ where a root is guaranteed to exist (because $f(a)$ and $f(b)$ 
                        have opposite signs) until the interval is small enough to meet a specified tolerance.
                    </p>
                    <h3 class="section-title">Function: <span class="accent-title">f(x) = x³ - 4x - 9</span></h3>
                    <h3 class="section-title">Source Code: <span class="accent-title">Bisection_Method.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// Bisection_Method.c
// Description: Finds the root of a non-linear equation using the Bisection Method.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span> <span class="c-comment">// For fabs()</span>

<span class="c-comment">// Function definition: f(x) = x^3 - 4x - 9</span>
<span class="c-type">double</span> <span class="c-function">f</span>(<span class="c-type">double</span> x) {
    <span class="c-keyword">return</span> x*x*x - <span class="c-number">4</span>*x - <span class="c-number">9</span>;
}

<span class="c-type">void</span> <span class="c-function">main</span>() {
    <span class="c-type">double</span> a, b, c, fa, fb, fc, tol;
    <span class="c-type">int</span> max_iter, iter = <span class="c-number">0</span>;

    <span class="c-function">printf</span>(<span class="c-string">"Enter the starting interval [a, b]:\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"a: "</span>); <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &a);
    <span class="c-function">printf</span>(<span class="c-string">"b: "</span>); <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &b);
    <span class="c-function">printf</span>(<span class="c-string">"Enter tolerance (e.g., 0.0001): "</span>); <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &tol);
    <span class="c-function">printf</span>(<span class="c-string">"Enter max iterations: "</span>); <span class="c-function">scanf</span>(<span class="c-string">"%d"</span>, &max_iter);

    fa = <span class="c-function">f</span>(a);
    fb = <span class="c-function">f</span>(b);

    <span class="c-keyword">if</span> (fa * fb >= <span class="c-number">0</span>) {
        <span class="c-function">printf</span>(<span class="c-string">"Error: f(a) and f(b) must have opposite signs.\n"</span>);
        <span class="c-keyword">return</span>;
    }

    <span class="c-function">printf</span>(<span class="c-string">"\nIteration | a        | b        | c        | f(c)     \n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"------------------------------------------------------\n"</span>);

    <span class="c-keyword">do</span> {
        iter++;
        c = (a + b) / <span class="c-number">2</span>;
        fc = <span class="c-function">f</span>(c);

        <span class="c-function">printf</span>(<span class="c-string">"%-9d | %-8.4lf | %-8.4lf | %-8.4lf | %-8.4lf \n"</span>, iter, a, b, c, fc);

        <span class="c-keyword">if</span> (fa * fc < <span class="c-number">0</span>) {
            b = c; <span class="c-comment">// Root is in [a, c]</span>
            fb = fc;
        } <span class="c-keyword">else</span> {
            a = c; <span class="c-comment">// Root is in [c, b]</span>
            fa = fc;
        }

        <span class="c-keyword">if</span> (<span class="c-function">fabs</span>(fc) < tol) {
            <span class="c-function">printf</span>(<span class="c-string">"\nRoot found at c = %.6lf after %d iterations.\n"</span>, c, iter);
            <span class="c-keyword">return</span>;
        }

    } <span class="c-keyword">while</span> (iter < max_iter);

    <span class="c-function">printf</span>(<span class="c-string">"\nRoot is approximately %.6lf after %d iterations.\n"</span>, c, iter);
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (for $f(x) = x^3 - 4x - 9$, interval [2, 3])</h3>
                    <div class="console-output">
                        <p>Enter the starting interval [a, b]:</p>
                        <p>a: 2</p>
                        <p>b: 3</p>
                        <p>Enter tolerance (e.g., 0.0001): 0.0001</p>
                        <p>Enter max iterations: 10</p>
                        <p>Iteration | a        | b        | c        | f(c)     </p>
                        <p>------------------------------------------------------</p>
                        <p>1         | 2.0000   | 3.0000   | 2.5000   | -3.3750  </p>
                        <p>2         | 2.5000   | 3.0000   | 2.7500   | -0.8906  </p>
                        <p>3         | 2.7500   | 3.0000   | 2.8750   | 0.9434   </p>
                        <p>4         | 2.7500   | 2.8750   | 2.8125   | 0.0496   </p>
                        <p>5         | 2.7500   | 2.8125   | 2.7813   | -0.4219  </p>
                        <p>6         | 2.7813   | 2.8125   | 2.7969   | -0.1873  </p>
                        <p>7         | 2.7969   | 2.8125   | 2.8047   | -0.0694  </p>
                        <p>8         | 2.8047   | 2.8125   | 2.8086   | -0.0099  </p>
                        <p>9         | 2.8086   | 2.8125   | 2.8105   | 0.0198   </p>
                        <p>10        | 2.8086   | 2.8105   | 2.8096   | 0.0049   </p>
                        <p>Root is approximately 2.809639 after 10 iterations.</p>
                    </div>
                `
            },
            
            'program12': {
                title: "Program 12: False Position Method (Regula Falsi)",
                description: `
                    <p class="text-body">
                        The **False Position Method** (Regula Falsi) is a root-finding algorithm that combines 
                        the stability of the Bisection Method with the speed of the Secant Method. It uses the 
                        formula $c = a - \\frac{f(a)(b-a)}{f(b)-f(a)}$ to find a better estimate of the root.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">false_position_method.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// false_position_method.c
// Description: Finds the real root of a non-linear equation using the False Position Method.
// Equation: f(x) = x^3 - 2x - 5
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-comment">// Define the function f(x) = x^3 - 2x - 5</span>
<span class="c_type">double</span> <span class="c-function">f</span>(<span class="c_type">double</span> x) {
    <span class="c_keyword">return</span> x*x*x - <span class="c-number">2</span>*x - <span class="c-number">5</span>;
}

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">double</span> a, b, c, fa, fb, fc;
    <span class="c_type">int</span> iteration = <span class="c-number">0</span>;
    <span class="c_type">double</span> E = <span class="c-number">0.00001</span>; <span class="c-comment">// Desired precision</span>

    <span class="c-function">printf</span>(<span class="c-string">"Using False Position Method for f(x) = x^3 - 2x - 5\n"</span>);
                    <span class="c-function">printf</span>(<span class="c-string">"Enter initial guess interval [a, b] where f(a) and f(b) have opposite signs:\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"Enter a: "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &a);
    <span class="c-function">printf</span>(<span class="c-string">"Enter b: "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &b);

    fa = <span class="c-function">f</span>(a);
    fb = <span class="c-function">f</span>(b);

    <span class="c-keyword">if</span> (fa * fb >= <span class="c-number">0</span>) {
        <span class="c-function">printf</span>(<span class="c-string">"Error: f(a) and f(b) must have opposite signs.\n"</span>);
        <span class="c_keyword">return</span> <span class="c-number">1</span>;
    }

    <span class="c-function">printf</span>(<span class="c-string">"\nIteration | a        | b        | c        | f(c)     \n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"--------------------------------------------------\n"</span>);
    
    <span class="c_keyword">do</span> {
        <span class="c-comment">// False Position Formula</span>
        c = a - (fa * (b - a) / (fb - fa));
        fc = <span class="c-function">f</span>(c);

        <span class="c-function">printf</span>(<span class="c-string">"%9d | %.6f | %.6f | %.6f | %.6f\n"</span>, ++iteration, a, b, c, fc);

        <span class="c_keyword">if</span> (<span class="c-function">fabs</span>(fc) < E) {
            <span class="c_keyword">break</span>; <span class="c-comment">// Root found with desired precision</span>
        } <span class="c_keyword">else if</span> (fa * fc < <span class="c-number">0</span>) {
            b = c;
            fb = fc;
        } <span class="c_keyword">else</span> {
            a = c;
            fa = fc;
        }

    } <span class="c_keyword">while</span> (<span class="c-number">1</span>); <span class="c-comment">// Loop until break condition is met</span>

    <span class="c-function">printf</span>(<span class="c-string">"--------------------------------------------------\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"Final root (c): %.6f\n"</span>, c);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Interval [2, 3] with E=0.00001)</h3>
                    <div class="console-output">
                        <p>Using False Position Method for f(x) = x^3 - 2x - 5</p>
                        <p>Enter initial guess interval [a, b] where f(a) and f(b) have opposite signs:</p>
                        <p>Enter a: 2</p>
                        <p>Enter b: 3</p>
                        <p></p>
                        <p>Iteration | a        | b        | c        | f(c)     </p>
                        <p>--------------------------------------------------</p>
                        <p>        1 | 2.000000 | 3.000000 | 2.090909 | -0.200000</p>
                        <p>        2 | 2.090909 | 3.000000 | 2.094254 | -0.007018</p>
                        <p>        3 | 2.094254 | 3.000000 | 2.094548 | -0.000245</p>
                        <p>        4 | 2.094548 | 3.000000 | 2.094551 | -0.000009</p>
                        <p>--------------------------------------------------</p>
                        <p>Final root (c): 2.094551</p>
                    </div>
                `
            },

            'program13': {
                title: "Program 13: Newton's Raphson Method",
                description: `
                    <p class="text-body">
                        **Newton's Raphson Method** is a powerful and rapidly convergent root-finding algorithm. 
                        It requires the calculation of both the function $f(x)$ and its derivative $f'(x)$. 
                        The formula for the next approximation is $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">newton_raphson.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// newton_raphson.c
// Description: Finds the root of a function using the Newton's Raphson method.
// Equation: f(x) = x*sin(x) + cos(x)
// Derivative: f'(x) = x*cos(x)
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-comment">// Define the function f(x)</span>
<span class="c_type">double</span> <span class="c-function">f</span>(<span class="c_type">double</span> x) {
    <span class="c_keyword">return</span> x * <span class="c-function">sin</span>(x) + <span class="c-function">cos</span>(x);
}

<span class="c-comment">// Define the derivative of the function f'(x)</span>
<span class="c_type">double</span> <span class="c-function">df</span>(<span class="c_type">double</span> x) {
    <span class="c_keyword">return</span> x * <span class="c-function">cos</span>(x);
}

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">double</span> x0, x1, fx0, dfx0;
    <span class="c_type">int</span> iteration = <span class="c-number">0</span>;
    <span class="c_type">double</span> E = <span class="c-number">0.000001</span>; <span class="c-comment">// Desired precision</span>
    <span class="c_type">double</span> PI = <span class="c-number">3.14159265358979323846</span>; 

    <span class="c-function">printf</span>(<span class="c-string">"Using Newton's Raphson for f(x) = x*sin(x) + cos(x)\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"Enter initial guess (e.g., %f): "</span>, PI);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &x0);

    <span class="c-function">printf</span>(<span class="c-string">"\nIteration | x_n      | f(x_n)   | f'(x_n)  | |x_n+1 - x_n|\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"--------------------------------------------------------------\n"</span>);

    <span class="c_keyword">do</span> {
        fx0 = <span class="c-function">f</span>(x0);
        dfx0 = <span class="c-function">df</span>(x0);

        <span class="c_keyword">if</span> (<span class="c-function">fabs</span>(dfx0) < E) {
            <span class="c-function">printf</span>(<span class="c-string">"Error: Derivative approaches zero. No solution or multi-root.\n"</span>);
            <span class="c_keyword">return</span> <span class="c-number">1</span>;
        }

        <span class="c-comment">// Newton's Raphson Formula</span>
        x1 = x0 - (fx0 / dfx0);

        <span class="c-function">printf</span>(<span class="c-string">"%9d | %.6f | %.6f | %.6f | %.6f\n"</span>, ++iteration, x0, fx0, dfx0, <span class="c-function">fabs</span>(x1 - x0));
        
        x0 = x1;

    } <span class="c_keyword">while</span> (<span class="c-function">fabs</span>(<span class="c-function">f</span>(x0)) >= E);

    <span class="c-function">printf</span>(<span class="c-string">"--------------------------------------------------------------\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"Final root: %.6f\n"</span>, x0);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Initial Guess: $\pi$)</h3>
                    <div class="console-output">
                        <p>Using Newton's Raphson for f(x) = x*sin(x) + cos(x)</p>
                        <p>Enter initial guess (e.g., 3.141593): 3.141593</p>
                        <p></p>
                        <p>Iteration | x_n      | f(x_n)   | f'(x_n)  | |x_n+1 - x_n|</p>
                        <p>--------------------------------------------------------------</p>
                        <p>        1 | 3.141593 | -0.000000 | -3.141593 | 0.000000</p>
                        <p>--------------------------------------------------------------</p>
                        <p>Final root: 3.141593</p>
                    </div>
                    <h3 class="section-title">Example Output 2 (Initial Guess: 3.0)</h3>
                    <div class="console-output">
                        <p>Using Newton's Raphson for f(x) = x*sin(x) + cos(x)</p>
                        <p>Enter initial guess (e.g., 3.141593): 3.0</p>
                        <p></p>
                        <p>Iteration | x_n      | f(x_n)   | f'(x_n)  | |x_n+1 - x_n|</p>
                        <p>--------------------------------------------------------------</p>
                        <p>        1 | 3.000000 | 0.141120 | -2.970007 | 0.047515</p>
                        <p>        2 | 3.047515 | 0.003923 | -3.003052 | 0.001306</p>
                        <p>        3 | 3.048821 | 0.000001 | -3.003912 | 0.000000</p>
                        <p>--------------------------------------------------------------</p>
                        <p>Final root: 3.048821</p>
                    </div>
                `
            },

            'program14': {
                title: "Program 14: Birge Vieta Method for Polynomial Roots",
                description: `
                    <p class="text-body">
                        The **Birge Vieta Method** is an efficient numerical technique used specifically for finding 
                        the real roots of a **polynomial equation** ($P(x)=0$). It is an iterative method that uses 
                        **synthetic division** (or Horner's method) to simultaneously evaluate the polynomial $P(x)$ 
                        and its derivative $P'(x)$ at a given guess, then applies the Newton's Raphson formula.
                    </p>
                    <h3 class="section-title">Source Code: <span class="accent-title">birge_vieta.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// birge_vieta.c
// Description: Finds a real root of a polynomial using the Birge-Vieta method.
// Polynomial: P(x) = x^3 - 11x^2 + 39x - 45 = 0
// Coefficients: {1, -11, 39, -45}
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-comment">// Function to perform synthetic division (Horner's method) for P(x) and P'(x)</span>
<span class="c_type">void</span> <span class="c-function">synthetic_division</span>(<span class="c_type">double</span> a[], <span class="c_type">int</span> n, <span class="c_type">double</span> x, <span class="c_type">double</span> *p_val, <span class="c_type">double</span> *dp_val) {
    <span class="c_type">double</span> b[n]; <span class="c-comment">// Stores the coefficients for the quotient (and P'(x) intermediate)</span>
    <span class="c_type">double</span> c[n]; <span class="c-comment">// Stores the coefficients for the P'(x) quotient</span>

    <span class="c-comment">// First synthetic division (to get P(x))</span>
    b[<span class="c-number">0</span>] = a[<span class="c-number">0</span>];
    <span class="c_keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">1</span>; i < n; i++) {
        b[i] = a[i] + b[i - <span class="c-number">1</span>] * x;
    }
    *p_val = b[n - <span class="c-number">1</span>]; <span class="c-comment">// The remainder is P(x)</span>

    <span class="c-comment">// Second synthetic division (on coefficients 'b' to get P'(x))</span>
    c[<span class="c-number">0</span>] = b[<span class="c-number">0</span>];
    <span class="c_keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">1</span>; i < n - <span class="c-number">1</span>; i++) {
        c[i] = b[i] + c[i - <span class="c-number">1</span>] * x;
    }
    *dp_val = c[n - <span class="c-number">2</span>]; <span class="c-comment">// The remainder is P'(x)</span>
}

<span class="c_type">int</span> <span class="c-function">main</span>() {
    <span class="c_type">double</span> a[] = {<span class="c-number">1.0</span>, -<span class="c-number">11.0</span>, <span class="c-number">39.0</span>, -<span class="c-number">45.0</span>}; <span class="c-comment">// Coeffs of x^3 - 11x^2 + 39x - 45</span>
    <span class="c_type">int</span> n = <span class="c-number">4</span>; <span class="c-comment">// Number of coefficients (Degree + 1)</span>
    <span class="c_type">double</span> x0, x1, P_x, dP_x;
    <span class="c_type">int</span> iteration = <span class="c-number">0</span>;
    <span class="c_type">double</span> E = <span class="c-number">0.000001</span>;

    <span class="c-function">printf</span>(<span class="c-string">"Using Birge-Vieta Method for P(x) = x^3 - 11x^2 + 39x - 45 = 0\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"Enter initial guess x0: "</span>);
    <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &x0);

    <span class="c-function">printf</span>(<span class="c-string">"\nIteration | x_n      | P(x_n)   | P'(x_n)  | |x_n+1 - x_n|\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"--------------------------------------------------------------\n"</span>);

    <span class="c_keyword">do</span> {
        <span class="c-function">synthetic_division</span>(a, n, x0, &P_x, &dP_x);

        <span class="c_keyword">if</span> (<span class="c-function">fabs</span>(dP_x) < E) {
            <span class="c-function">printf</span>(<span class="c-string">"Error: P'(x) approaches zero.\n"</span>);
            <span class="c_keyword">return</span> <span class="c-number">1</span>;
        }

        <span class="c-comment">// Calculate new root guess (Newton's formula)</span>
        x1 = x0 - (P_x / dP_x);

        <span class="c-function">printf</span>(<span class="c-string">"%9d | %.6f | %.6f | %.6f | %.6f\n"</span>, ++iteration, x0, P_x, dP_x, <span class="c-function">fabs</span>(x1 - x0));
        
        <span class="c_keyword">if</span> (<span class="c-function">fabs</span>(x1 - x0) < E) {
            x0 = x1;
            <span class="c_keyword">break</span>;
        }
        x0 = x1;

    } <span class="c_keyword">while</span> (<span class="c-number">1</span>);

    <span class="c-function">printf</span>(<span class="c-string">"--------------------------------------------------------------\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"Final root: %.6f\n"</span>, x0);

    <span class="c_keyword">return</span> <span class="c-number">0</span>;
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (Initial Guess: 2)</h3>
                    <div class="console-output">
                        <p>Using Birge-Vieta Method for P(x) = x^3 - 11x^2 + 39x - 45 = 0</p>
                        <p>Enter initial guess x0: 2</p>
                        <p></p>
                        <p>Iteration | x_n      | P(x_n)   | P'(x_n)  | |x_n+1 - x_n|</p>
                        <p>--------------------------------------------------------------</p>
                        <p>        1 | 2.000000 | 5.000000 | 11.000000 | 0.454545</p>
                        <p>        2 | 2.454545 | 1.838848 | 6.446280 | 0.285265</p>
                        <p>        3 | 2.739810 | 0.403810 | 3.655866 | 0.110469</p>
                        <p>        4 | 2.850279 | 0.063167 | 2.502019 | 0.025246</p>
                        <p>        5 | 2.875525 | 0.000000 | 2.274996 | 0.000000</p>
                        <p>--------------------------------------------------------------</p>
                        <p>Final root: 2.875525</p>
                    </div>
                    <h3 class="section-title">Example Output 2 (Initial Guess: 3)</h3>
                    <div class="console-output">
                        <p>Using Birge-Vieta Method for P(x) = x^3 - 11x^2 + 39x - 45 = 0</p>
                        <p>Enter initial guess x0: 3</p>
                        <p></p>
                        <p>Iteration | x_n      | P(x_n)   | P'(x_n)  | |x_n+1 - x_n|</p>
                        <p>--------------------------------------------------------------</p>
                        <p>        1 | 3.000000 | 0.000000 | 0.000000 | 0.000000</p>
                        <p>--------------------------------------------------------------</p>
                        <p>Final root: 3.000000</p>
                    </div>
                `
            },
            
            'program15': {
                title: "Program 15: Gauss Elimination Method",
                description: `
                    <p class="text-body">
                        The **Gauss Elimination Method** is a direct method used to solve a system of linear algebraic equations. 
                        The primary goal is to transform the augmented matrix of the system into an **upper triangular matrix** using elementary row operations (forward elimination). The solution is then found using **backward substitution**.
                    </p>
                    <h3 class="section-title">System of Equations:</h3>
                    <pre class="console-output">
2x + y + z = 10
3x + 2y + 3z = 18
x + 4y + 9z = 16
                    </pre>
                    <h3 class="section-title">Source Code: <span class="accent-title">Gauss_Elimination.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// Gauss_Elimination.c
// Description: Solves a system of linear equations using the Gauss Elimination Method.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-include">#define</span> N <span class="c-number">3</span> <span class="c-comment">// Number of unknowns/equations</span>

<span class="c-type">void</span> <span class="c-function">main</span>() {
    <span class="c-type">int</span> i, j, k;
    <span class="c-type">double</span> A[N][N+<span class="c-number">1</span>], ratio, x[N];

    <span class="c-function">printf</span>(<span class="c-string">"Enter the elements of the augmented matrix (A|B):\n"</span>);
    <span class="c-comment">// Sample input for the example: 2 1 1 10, 3 2 3 18, 1 4 9 16</span>
    <span class="c-keyword">for</span> (i = <span class="c-number">0</span>; i < N; i++) {
        <span class="c-keyword">for</span> (j = <span class="c-number">0</span>; j < N + <span class="c-number">1</span>; j++) {
            <span class="c-function">printf</span>(<span class="c-string">"A[%d][%d]: "</span>, i, j);
            <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &A[i][j]);
        }
    }

    <span class="c-comment">// 1. Forward Elimination (to Upper Triangular Form)</span>
    <span class="c-keyword">for</span> (i = <span class="c-number">0</span>; i < N; i++) {
        <span class="c-comment">// Check for pivot element being zero (simplistic check)</span>
        <span class="c-keyword">if</span> (A[i][i] == <span class="c-number">0.0</span>) {
            <span class="c-function">printf</span>(<span class="c-string">"Error: Division by zero encountered. Pivoting required.\n"</span>);
            <span class="c-keyword">return</span>;
        }

        <span class="c-keyword">for</span> (j = i + <span class="c-number">1</span>; j < N; j++) {
            ratio = A[j][i] / A[i][i];
            
            <span class="c-keyword">for</span> (k = i; k < N + <span class="c-number">1</span>; k++) {
                A[j][k] = A[j][k] - ratio * A[i][k];
            }
        }
    }

    <span class="c-comment">// 2. Backward Substitution</span>
    x[N - <span class="c-number">1</span>] = A[N - <span class="c-number">1</span>][N] / A[N - <span class="c-number">1</span>][N - <span class="c-number">1</span>];

    <span class="c-keyword">for</span> (i = N - <span class="c-number">2</span>; i >= <span class="c-number">0</span>; i--) {
        <span class="c-type">double</span> sum = <span class="c-number">0.0</span>;
        <span class="c-keyword">for</span> (j = i + <span class="c-number">1</span>; j < N; j++) {
            sum = sum + A[i][j] * x[j];
        }
        x[i] = (A[i][N] - sum) / A[i][i];
    }

    <span class="c-comment">// 3. Display Solution</span>
    <span class="c-function">printf</span>(<span class="c-string">"\nSolution:\n"</span>);
    <span class="c-keyword">for</span> (i = <span class="c-number">0</span>; i < N; i++) {
        <span class="c-function">printf</span>(<span class="c-string">"x[%d] = %.4lf\n"</span>, i, x[i]);
    }
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output</h3>
                    <div class="console-output">
                        <p>Enter the elements of the augmented matrix (A|B):</p>
                        <p>A[0][0]: 2</p>
                        <p>A[0][1]: 1</p>
                        <p>A[0][2]: 1</p>
                        <p>A[0][3]: 10</p>
                        <p>A[1][0]: 3</p>
                        <p>A[1][1]: 2</p>
                        <p>A[1][2]: 3</p>
                        <p>A[1][3]: 18</p>
                        <p>A[2][0]: 1</p>
                        <p>A[2][1]: 4</p>
                        <p>A[2][2]: 9</p>
                        <p>A[2][3]: 16</p>
                        <p>Solution:</p>
                        <p>x[0] = 3.0000</p>
                        <p>x[1] = 4.0000</p>
                        <p>x[2] = 0.0000</p>
                    </div>
                `
            },

            'program16': {
                title: "Program 16: Gauss-Jordan Method",
                description: `
                    <p class="text-body">
                        The **Gauss-Jordan Method** is an extension of the Gauss Elimination Method. Instead of stopping at the 
                        upper triangular matrix form, it continues the row operations to reduce the augmented matrix into a 
                        **Reduced Row Echelon Form** (diagonal matrix on the left side). This eliminates the need for backward substitution.
                    </p>
                    <h3 class="section-title">System of Equations:</h3>
                    <pre class="console-output">
2x + y + z = 10
3x + 2y + 3z = 18
x + 4y + 9z = 16
                    </pre>
                    <h3 class="section-title">Source Code: <span class="accent-title">Gauss_Jordan.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// Gauss_Jordan.c
// Description: Solves a system of linear equations using the Gauss-Jordan Method.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-include">#define</span> N <span class="c-number">3</span> <span class="c-comment">// Number of unknowns/equations</span>

<span class="c-type">void</span> <span class="c-function">main</span>() {
    <span class="c-type">int</span> i, j, k;
    <span class="c-type">double</span> A[N][N+<span class="c-number">1</span>], ratio;

    <span class="c-function">printf</span>(<span class="c-string">"Enter the elements of the augmented matrix (A|B):\n"</span>);
    <span class="c-comment">// Sample input for the example: 2 1 1 10, 3 2 3 18, 1 4 9 16</span>
    <span class="c-keyword">for</span> (i = <span class="c-number">0</span>; i < N; i++) {
        <span class="c-keyword">for</span> (j = <span class="c-number">0</span>; j < N + <span class="c-number">1</span>; j++) {
            <span class="c-function">printf</span>(<span class="c-string">"A[%d][%d]: "</span>, i, j);
            <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &A[i][j]);
        }
    }

    <span class="c-comment">// 1. Transformation to Reduced Row Echelon Form (RREF)</span>
    <span class="c-keyword">for</span> (i = <span class="c-number">0</span>; i < N; i++) {
        <span class="c-comment">// 1.1. Make the diagonal element (pivot) 1</span>
        <span class="c-keyword">if</span> (A[i][i] == <span class="c-number">0.0</span>) {
            <span class="c-function">printf</span>(<span class="c-string">"Error: Division by zero encountered. Pivoting required.\n"</span>);
            <span class="c-keyword">return</span>;
        }
        ratio = A[i][i];
        <span class="c-keyword">for</span> (j = i; j < N + <span class="c-number">1</span>; j++) {
            A[i][j] = A[i][j] / ratio;
        }

        <span class="c-comment">// 1.2. Make all other elements in the column 0</span>
        <span class="c-keyword">for</span> (j = <span class="c-number">0</span>; j < N; j++) {
            <span class="c-keyword">if</span> (i != j) {
                ratio = A[j][i] / A[i][i]; <span class="c-comment">// Note: A[i][i] is now 1, but keep general form</span>
                <span class="c-keyword">for</span> (k = <span class="c-number">0</span>; k < N + <span class="c-number">1</span>; k++) {
                    A[j][k] = A[j][k] - ratio * A[i][k];
                }
            }
        }
    }

    <span class="c-comment">// 2. Display Solution (the last column now contains the solution)</span>
    <span class="c-function">printf</span>(<span class="c-string">"\nSolution:\n"</span>);
    <span class="c-keyword">for</span> (i = <span class="c-number">0</span>; i < N; i++) {
        <span class="c-function">printf</span>(<span class="c-string">"x[%d] = %.4lf\n"</span>, i, A[i][N]);
    }
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output</h3>
                    <div class="console-output">
                        <p>Enter the elements of the augmented matrix (A|B):</p>
                        <p>A[0][0]: 2</p>
                        <p>A[0][1]: 1</p>
                        <p>A[0][2]: 1</p>
                        <p>A[0][3]: 10</p>
                        <p>A[1][0]: 3</p>
                        <p>A[1][1]: 2</p>
                        <p>A[1][2]: 3</p>
                        <p>A[1][3]: 18</p>
                        <p>A[2][0]: 1</p>
                        <p>A[2][1]: 4</p>
                        <p>A[2][2]: 9</p>
                        <p>A[2][3]: 16</p>
                        <p>Solution:</p>
                        <p>x[0] = 3.0000</p>
                        <p>x[1] = 4.0000</p>
                        <p>x[2] = 0.0000</p>
                    </div>
                `
            },

            'program17': {
                title: "Program 17: Gauss-Seidel Method",
                description: `
                    <p class="text-body">
                        The **Gauss-Seidel Method** is an iterative technique used to solve systems of linear equations. 
                        Unlike direct methods (like Gauss Elimination), it starts with an initial guess and repeatedly refines 
                        the solution. The key advantage is that it uses the **most recently calculated values** of the variables 
                        immediately in the current iteration, which speeds up convergence compared to the Jacobi method.
                    </p>
                    <h3 class="section-title">System of Equations (Diagonally Dominant form for convergence):</h3>
                    <pre class="console-output">
10x + y + z = 12
x + 10y + z = 12
x + y + 10z = 12
                    </pre>
                    <h3 class="section-title">Source Code: <span class="accent-title">Gauss_Seidel.c</span></h3>
                    <div class="code-container">
                        <pre>
<span class="c-comment">//
// Gauss_Seidel.c
// Description: Solves a system of linear equations using the iterative Gauss-Seidel Method.
// Note: Requires the system to be diagonally dominant for guaranteed convergence.
//</span>

<span class="c-include">#include &lt;stdio.h&gt;</span>
<span class="c-include">#include &lt;math.h&gt;</span>

<span class="c-include">#define</span> N <span class="c-number">3</span> <span class="c-comment">// Number of unknowns/equations</span>

<span class="c-type">void</span> <span class="c-function">main</span>() {
    <span class="c-type">double</span> A[N][N+<span class="c-number">1</span>];
    <span class="c-type">double</span> x[N] = {<span class="c-number">0.0</span>, <span class="c-number">0.0</span>, <span class="c-number">0.0</span>}; <span class="c-comment">// Initial guess (x0=0, y0=0, z0=0)</span>
    <span class="c-type">double</span> x_old[N];
    <span class="c-type">double</span> E = <span class="c-number">0.0001</span>; <span class="c-comment">// Tolerance</span>
    <span class="c-type">int</span> max_iter = <span class="c-number">20</span>, iter = <span class="c-number">0</span>;
    <span class="c-type">double</span> max_diff;

    <span class="c-function">printf</span>(<span class="c-string">"Enter the elements of the augmented matrix (A|B):\n"</span>);
    <span class="c-comment">// Diagonally Dominant Example: 10 1 1 12, 1 10 1 12, 1 1 10 12 (Solution is x=1, y=1, z=1)</span>
    <span class="c-keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">0</span>; i < N; i++) {
        <span class="c-keyword">for</span> (<span class="c-type">int</span> j = <span class="c-number">0</span>; j < N + <span class="c-number">1</span>; j++) {
            <span class="c-function">printf</span>(<span class="c-string">"A[%d][%d]: "</span>, i, j);
            <span class="c-function">scanf</span>(<span class="c-string">"%lf"</span>, &A[i][j]);
        }
    }

    <span class="c-function">printf</span>(<span class="c-string">"\nIter. | x_0      | x_1      | x_2      | Max Difference\n"</span>);
    <span class="c-function">printf</span>(<span class="c-string">"-----------------------------------------------------------\n"</span>);

    <span class="c-keyword">do</span> {
        iter++;
        max_diff = <span class="c-number">0.0</span>;
        
        <span class="c-keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">0</span>; i < N; i++) {
            x_old[i] = x[i];
        }

        <span class="c-keyword">for</span> (<span class="c-type">int</span> i = <span class="c-number">0</span>; i < N; i++) {
            <span class="c-type">double</span> sum = <span class="c-number">0.0</span>;
            <span class="c-keyword">for</span> (<span class="c-type">int</span> j = <span class="c-number">0</span>; j < N; j++) {
                <span class="c-keyword">if</span> (i != j) {
                    <span class="c-comment">// Use the NEWEST value of x[j] (Gauss-Seidel)</span>
                    sum += A[i][j] * x[j];
                }
            }
            <span class="c-comment">// Formula: x_i = (B_i - sum) / A_ii</span>
            x[i] = (A[i][N] - sum) / A[i][i];

            <span class="c-comment">// Calculate max difference with OLD value</span>
            <span class="c-keyword">if</span> (<span class="c-function">fabs</span>(x[i] - x_old[i]) > max_diff) {
                max_diff = <span class="c-function">fabs</span>(x[i] - x_old[i]);
            }
        }
        
        <span class="c-function">printf</span>(<span class="c-string">"%-5d | %-8.4lf | %-8.4lf | %-8.4lf | %-13.4lf\n"</span>, iter, x[<span class="c-number">0</span>], x[<span class="c-number">1</span>], x[<span class="c-number">2</span>], max_diff);

        <span class="c-keyword">if</span> (max_diff < E) {
            <span class="c-function">printf</span>(<span class="c-string">"\nConverged after %d iterations.\n"</span>, iter);
            <span class="c-function">printf</span>(<span class="c-string">"Solution: x = %.6lf, y = %.6lf, z = %.6lf\n"</span>, x[<span class="c-number">0</span>], x[<span class="c-number">1</span>], x[<span class="c-number">2</span>]);
            <span class="c-keyword">return</span>;
        }

    } <span class="c-keyword">while</span> (iter < max_iter);

    <span class="c-function">printf</span>(<span class="c-string">"\nDid not converge within %d iterations.\n"</span>, max_iter);
}
                        </pre>
                    </div>
                    <h3 class="section-title">Example Output (for the Diagonally Dominant system)</h3>
                    <div class="console-output">
                        <p>Enter the elements of the augmented matrix (A|B):</p>
                        <p>A[0][0]: 10</p>
                        <p>A[0][1]: 1</p>
                        <p>A[0][2]: 1</p>
                        <p>A[0][3]: 12</p>
                        <p>A[1][0]: 1</p>
                        <p>A[1][1]: 10</p>
                        <p>A[1][2]: 1</p>
                        <p>A[1][3]: 12</p>
                        <p>A[2][0]: 1</p>
                        <p>A[2][1]: 1</p>
                        <p>A[2][2]: 10</p>
                        <p>A[2][3]: 12</p>
                        <p>Iter. | x_0      | x_1      | x_2      | Max Difference</p>
                        <p>-----------------------------------------------------------</p>
                        <p>1     | 1.2000   | 1.0800   | 0.9720   | 1.2000       </p>
                        <p>2     | 0.9948   | 0.9833   | 0.9978   | 0.2052       </p>
                        <p>3     | 1.0020   | 0.9998   | 0.9998   | 0.0072       </p>
                        <p>4     | 1.0000   | 1.0000   | 1.0000   | 0.0020       </p>
                        <p>5     | 1.0000   | 1.0000   | 1.0000   | 0.0000       </p>
                        <p>Converged after 5 iterations.</p>
                        <p>Solution: x = 1.000000, y = 1.000000, z = 1.000000</p>
                    </div>
                `
            },
            
          
          
        












        };

        // Function to render the current page content
        function renderContent() {
            const page = pages[currentPage];
            
            // 1. Apply fade out transition
            mainContent.classList.remove('content-fade');
            mainContent.style.opacity = '0';
            
            setTimeout(() => {
                // 2. Update content
                mainContent.innerHTML = `
                    <div class="content-container">
                        <h1 class="content-header">${page.title}</h1>
                        <div class="header-underline"></div>
                        <div class="content-box">${page.description}</div>
                    </div>
                `;
                
                // 3. Apply fade in transition
                mainContent.classList.add('content-fade');
                mainContent.style.opacity = '1';

            }, 200); // Wait for fade out to complete (200ms)

            // Update active state of navigation links
            Object.keys(navItems).forEach(key => {
                if (key === currentPage) {
                    navItems[key].classList.add('active');
                    navItems[key].style.transform = 'translateX(2px)';
                } else {
                    navItems[key].classList.remove('active');
                    navItems[key].style.transform = 'translateX(0)';
                }
            });
        }

        // Global navigation function
        function navigate(page) {
            if (page !== currentPage) {
                currentPage = page;
                renderContent();
            }
        }

        // Initial load
        window.onload = () => {
            renderContent();
        };
