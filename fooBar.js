const fooBar = (n) => {
    for (let i = 1; i <= n; i++) {
        let output = ""

        if (i % 3 === 0) output += 'Foo'
        if (i % 5 === 0) output += 'Bar'

        console.log(output || i)
    }
}

fooBar(100)