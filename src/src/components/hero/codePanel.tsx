"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import "./codePanel.css";


export function CodePanel() {
	const variants = {
		initial: {
			rotate: -10
		},
		hover: {
			rotate: 0
		}
	};

	return (
		<>
			<motion.div
				variants={variants}
				initial="initial"
				whileHover="hover"
				className={clsx(
					"absolute",
					"top-2/3 left-10",
					"z-[10]",
					"hidden md:flex",
					"justify-center items-center",
					"p-3",
					"backdrop-blur-sm",
					"border border-white/[0.2]",
					"rounded-lg shadow-md"
				)}>
				<div className="w-full h-full flex flex-col justify-center items-center">
					{HonoCode}
				</div>
			</motion.div>
			<motion.div
				variants={variants}
				initial="initial"
				whileHover="hover"
				className={clsx(
					"absolute",
					"top-1/2 left-5",
					"z-[9]",
					"hidden md:flex",
					"justify-center items-center",
					"p-3",
					"backdrop-blur-sm",
					"border border-white/[0.2]",
					"rounded-lg shadow-md"
				)}>
				<div className="w-full h-full flex flex-col justify-center items-center">
					{GopherCode}
				</div>
			</motion.div>
		</>
	);
}

const HonoCode = (
	<pre>
		<code className="language-typescript">
			<span className="hljs-keyword">import</span> {"{"}{" "}
			<span className="hljs-title className_">Hono</span> {"}"}{" "}
			<span className="hljs-keyword">from</span>{" "}
			<span className="hljs-string">{"'hono'"}</span>;<br />
			<br />
			<span className="hljs-keyword">const</span> app ={" "}
			<span className="hljs-keyword">new</span>{" "}
			<span className="hljs-title className_">Hono</span>(); <br />
			<br />
			app.
			<span className="hljs-title function_">get</span>(
			<span className="hljs-string">{"'/'"}</span>,{" "}
			<span className="hljs-function">
				(<span className="hljs-params">c</span>) =&gt;
			</span>{" "}
			{"{"}
			<br />
			<span className="hljs-keyword"> return</span> c.
			<span className="hljs-title function_">text</span>(
			<span className="hljs-string">{"'Welcome to Amex Net!'"}</span>);
			<br />
			{"});"}
			<br />
			<br />
			<span className="hljs-keyword">export</span>{" "}
			<span className="hljs-keyword">default</span> app;
		</code>
	</pre>
);

const GopherCode = (
	<pre>
		<code>
			<span className="hljs-keyword">package</span> main
			<br />
			<span className="hljs-keyword">import</span>{" "}
			<span className="hljs-string">{'"fmt"'}</span>
			<br />
			<br />
			<span className="hljs-keyword">type</span> Gopher{" "}
			<span className="hljs-keyword">struct</span> {"{"}
			<br />
			{"  "}Attribute <span className="hljs-type">string</span>
			<br />
			{"}"}
			<br />
			<br />
			<span className="hljs-function">
				<span className="hljs-keyword">func</span>{" "}
				<span className="hljs-params">(g *Gopher)</span>
			</span>{" "}
			say() {"{"}
			<br />
			{"  "}fmt.Printf(<span className="hljs-string">{`"I'm %s"`}</span>,
			g.Attribute)
			<br />
			{"}"}
			<br />
			g := &amp;Gopher{"{"} Attribute:{" "}
			<span className="hljs-string">{'"so cute"'}</span> {"}"}
			<br />
			g.say()
		</code>
		<br />
	</pre>
);