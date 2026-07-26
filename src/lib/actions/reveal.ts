// Scroll-reveal action — adds `.is-revealed` to an element the first time it
// scrolls into the viewport, letting CSS handle the actual transition.
// Usage: <div use:reveal class="reveal-up"> or <div use:reveal={{ delay: 80 }} class="reveal-up">

export function reveal(node: HTMLElement, options?: { delay?: number }) {
	const delay = options?.delay ?? 0;
	if (delay) node.style.transitionDelay = `${delay}ms`;
	node.classList.add('is-reveal-ready');

	// Respect users who've asked for less motion: just show it immediately.
	if (
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches
	) {
		node.classList.add('is-revealed');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-revealed');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		update(newOptions?: { delay?: number }) {
			const d = newOptions?.delay ?? 0;
			if (d) node.style.transitionDelay = `${d}ms`;
		},
		destroy() {
			observer.disconnect();
		}
	};
}
