install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-isEven:
	node bin/brain-games.js
	node bin/brain-isEven
brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run