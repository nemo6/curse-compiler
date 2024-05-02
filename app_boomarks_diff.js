
let a = _("/brave-save-bookmarks/Bookmarks")
.fchain( (x,i,p,last) => i == "url" && { url:x,title:last(p,1).name,folder:last(p,3).name } )
.filter( bar )
.valueOf()

let b =_("/BraveSoftware/Brave-Browser/User Data/Default/Bookmarks")
.fchain( (x,i,p,last) => i == "url" && { url:x,title:last(p,1).name,folder:last(p,3).name } )
.filter( bar )
.valueOf()

//

let c = _.uniqBy( [...a,...b] , "url" )

//

m = [{
    value: c,
    args: "/Dropbox/B bookmarks/brave-save-bookmarks/Bookmarks"
  },
  {
    value: fchain( m[0], ( x,i,p,last ) => i == "url" && { url:x, title:last(p,1).name, folder:last(p,3).name } )
    .filter( bar ),
    args: "/save/save (2)/Bookmarks (2)"
  },
]

//

function pack(a,b,type){
	return [ { value:_.differenceBy( a.value,b.value, type ), args:a.args }, { value:_.differenceBy( b.value,a.value, type ), args:b.args } ]
}

function diffBy(x,type){
	let [a,b] = x
	return pack( { value:_.uniqBy(a.value,type),args:a.args }, { value:_.uniqBy(b.value,type),args:b.args }, type )
}

function renderRange(x){

	let [a,b] = x

	String.prototype.short = function(n){
		return ( this.length > n ) ? this.slice(0,n) + "..." : this
	}

	let style     = "<style>table{font-family:arial,sans-serif;border-collapse:collapse;}td,th{border:1px solid #dddddd;text-align:left;padding:8px;white-space:nowrap;}</style>"
	let grandient = "background:repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px);"

	return ( (a,b) => {

		let [min,max] = ( (a,b) => a < b ? [a,b] : [b,a] )(a.value.length,b.value.length)

		if( /Google\/Chrome/.test(a.args) || /BraveSoftware\/Brave-Browser/.test(a.args) || /brave-save-bookmarks/.test(a.args) ){

			a.args = a.args+" "+"\uD83D\uDD04"
		}

		else if( /Google\/Chrome/.test(b.args) || /BraveSoftware\/Brave-Browser/.test(b.args) || /brave-save-bookmarks/.test(b.args) ){

			b.args = b.args+" "+"\uD83D\uDD04"
		}

		if( /Bookmarks \(0\)/.test(a.args) ){
			a.args = a.args+" "+"💾"
		}

		else if( /Bookmarks \(0\)/.test(b.args) ){
			b.args = b.args+" "+"💾"
		}

		let content = style + "<table>"

		content += `<tr><th>&#8203</th><th>${a.args} [${a.value.length}]</th><th>${b.args} [${b.value.length}]</th></tr>`

        // ...

    // ...

    })(a,b)

}

//
    
    _()
    .arr(...m)
    .tap( ( [a,b] = x ) => {
      remove_hastag(a.value)
      remove_hastag(b.value)
    })
    .diffBy( "new_title" )
    .diffBy( "url" )
    .tap( ( [a,b] = x ) => {
      console.log(a.value.length)
      console.log(b.value.length)
    } )
    .renderRange()
    .Router( "/" , "html" )
    .valueOf()

//

serverEx()
