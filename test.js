let lib = require( './index' )

console.log(lib.isMobile('0571-88998899'))

console.log(lib.isMobile('13588990099'))

console.log(lib.isIdCard('33030119880907005X'))

console.log(lib.calcPwdScore('China#1234'))

console.log(lib.isChinese('中文'))