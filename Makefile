install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-isEven:
	node bin/brain-games.js
	node bin/brain-isEven
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-games.js
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-games.js
	node bin/brain-progression.js
publish:
	npm publish --dry-run