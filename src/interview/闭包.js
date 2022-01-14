/**
 * 作用域的应用场景 - 模块化
 * 
 */
function module1() {
    var a = 1;
    console.log(a)
}

function module2() {
    var a = 2;
    console.log(a)
}

module1()
module2()


function curry(fn,len = fn.length) {
    return _curry.call(this,fn,len)
}


function _curry(fn,len,...args) {
    return function (...params) {
        let _args = [...args,...params];
        if(_args.length >= len){
            return fn.apply(this,_args);
        }else{
            return _curry.call(this,fn,len,..._args)
        }
    }
}

let _fn = curry(function(a,b,c,d,e){
    console.log(a,b,c,d,e)
});

_fn(1)