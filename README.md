# curse-compiler

```vanilla version```

![](https://github.com/nemo6/curse-compiler/blob/main/c1.png)

```awfull complie version```

![](https://github.com/nemo6/curse-compiler/blob/main/c2.png)

# substring/replace hell

```js

	regexReplaceCoffee({

		scope    : /".*?"/g,
		target   : /{/g,
		replace  : "",
		callback : m => m.filter( x => /{/.test(x.value) && /}/.test(x.value) ),
		name     : "template strings"

	})
```
