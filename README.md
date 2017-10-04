## Initialize Eventlyjs

```javascript
const config = {
	"url": "<URL to evently server>",
	"token": "<Token from evently server>"
}

const evently = require("eventlyjs").init(config);

evently.events.search()
	.then(events => console.log(events))
	.catch(err => console.error(err));
```

## Available Commands
* evently.events.create
* evently.events.get
* evently.events.update
* evently.events.remove
* evently.events.search
* evently.events.join
* evently.events.leave