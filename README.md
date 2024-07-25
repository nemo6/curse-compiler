# curse-compiler

```vanilla version```

![](https://github.com/nemo6/curse-compiler/blob/main/img/a3.png)

```awfull compile version```

![](https://github.com/nemo6/curse-compiler/blob/main/img/a2.png)

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
	replace  : "#{",
	callback : m => m.filter( x => /{/.test(x.value) && /}/.test(x.value) ),
	name     : "template strings"

})
```

In this exemple, **regexReplaceCoffee** change :
```
"hello {name}"  => "hello #{name}"
"hello2 {name}" => "hello2 #{name}"
```

# offset madness

```js
// in regexReplaceCoffee function :

for( let [i,x] of allRegexMatch.entries() ){

	let { index, lastIndex, value } = x
	
	let a = value
	
	value = value.replace( target, replace )
	
	let b = value
	
	let offset = b.length - a.length
	
	if( local_offset >= 0 )
	lastIndex = lastIndex + local_offset
	else
	index = index + local_offset
	
	//
	
	file = setCharAt( file, index, lastIndex, value )
	
	// file as change, add offset to local_offset
	
	local_offset += offset
	
	// ....

}
```

# span regex replace

```js
// in highlightChange function :

for( let [i,x] of m.entries() ){

	let {

	  index,
	  lastIndex,
	  offset,
	  local_offset,
	  local_iteration,
	  first_local_iteation,
	  loop,

	} = x

	console.log( "highlightChange", index,lastIndex,local_offset )

	/* if local_offset is positive (+)
	only value "lastIndex" need to change
	if it is the oppostive, local_offset is negative (-)
	the value "index" need to change, not the value "lastIndex"
	*/
	
	if( local_offset >= 0 ){

		lastIndex += local_offset

	}
	else{

		if( first_local_iteation ){

			lastIndex += local_offset

		}

	}

	let value = file.substring( index, lastIndex )

	//

	let a = value.length

	value = `<span style="background:${colors[loop]};">${value}</span>`

	let b = value.length

	//

	index     += span_offset
	lastIndex += span_offset

	span_file = setCharAt( span_file,index,lastIndex,value )

	span_offset += ( b - a )

	// ...

}
```
