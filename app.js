//

let A = read_test("C:/test/test.txt")
.filter( x => !REG.test(x.url) )

let B = (await search("History"))
.filter( x => !REG.test(x.url) )

//

;[VA,VB] = trimDate( A, B, ["C:/test/test.txt","/Brave/History"] )

//

let renderRange = require("./renderRange_module_exp.js")

//

_.mixin({serverEx,transform,updateFlow,renderRange})

//

;( (m) => {

  let C = [

    _(VA).differenceBy( VB, "url" )
    .updateFlow( ["url","time"], [ [a_url],[btime] ] )
    .map( x => _.pick( x, ["url","time"] ) )
    .tap( x => x.sort( (a,b) => a.url.localeCompare( b.url, undefined, { numeric:true } ) ) )
    .valueOf(),

    _(VB).differenceBy( VA, "url" )
    .updateFlow( ["url","time"], [ [a_url],[btime] ] )
    .map( x => _.pick( x, ["url","time"] ) )
    .tap( x => x.sort( (a,b) => a.url.localeCompare( b.url, undefined, { numeric:true } ) ) )
    .valueOf()
  ]

  // C = C.map( x => _.pick( x, ["index","title","url","time"] ) )

  _(C)
  .renderRange( null, null, [ "C:/test/test.txt", "/Brave/History" ] )
  .thru( x => ({ render:x, title:"differenceBy" }) )
  .serverEx("html")
  .valueOf()

})(A)
