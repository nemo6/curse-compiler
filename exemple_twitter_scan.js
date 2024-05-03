// vanilla version

µ("twitter.txt")
.parse()
.regexColor()
.thru( x => {
    console.log( _.getArgs(0) )
})
.render()
.Router( "/", "html" )
.valueOf()

// awfull complie version :

µ("twitter.txt")
.thru( x => {

    let args = []
	args.push( value )
	return { args: args, value: parse(x) ) }

}
.thru( ({args,value}=x) => {

	args.push( value )
	return { args: args, value: regexColor(value) ) }

}
.thru( ({args,value}=x) => {

    // console.log( _.getArgs(0) )

    console.log( args[0])

})
.render()
.Router( "/", "html" )
.valueOf()

//

serverEx()

//

function µ(x){ _.mixin({parse,serverEx,regexColor,scrape_hastag,render,Router});return _(x) }

//

function parse(x){

	let p      = "/Dropbox/D txt"
	let foo    = _.curryRight(fs.readFileSync)("utf8")
	let result = foo( path.join(p,x) ).split(/\r\n|\n/).filter( x => x != "" )

	let n  = result.indexOf( "portfolio:" )
	result = result.map( space_divide )

	return result

}

function space_divide(x){

	let n = x.indexOf(" ")
	if( n < 0 ) return [x,""]
	let a = x.substring( 0, n )
	let b = x.substring( n + 1 )
	return [a,b]

}

function Router(a,b,n){

	router.get( b, ( req, res ) => {res.writeHead(200,{"content-type":`text/${n};charset=utf8`});res.end(a)} )

}
