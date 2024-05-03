# curse-compiler

```vanilla version```

![](https://github.com/nemo6/curse-compiler/blob/main/c1.png)

```awfull complie version```

![](https://github.com/nemo6/curse-compiler/blob/main/c2.png)

# regex match and replace hell

```coffee
# coffee script exemple

print yearsOld

str = "hello {name}"

print users

str = "hello2 {name}"
```

```js
regexReplaceCoffee({

	scope    : /".*?"/g,
	target   : /{/g,
	replace  : "",
	callback : m => m.filter( x => /{/.test(x.value) && /}/.test(x.value) ),
	name     : "template strings"

})
```
