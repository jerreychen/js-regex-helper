module.exports = {
    // calculate the strength of password
    calcPwdScore(str, minLen) {
        minLen = minLen || 8

        let score = 0   // total score
        let g = 0   // groups 
        let m = null    // matches
        // uppercase characters
        if(m = str.match(/[A-Z]+/g)) {
            score += m.length > 1 ? 15 : 10
            g++
        }
        // lowercase characters
        if(m = str.match(/[a-z]+/g)) {
            score += m.length > 1 ? 15 : 10
            g++
        }
        // digit number
        if(m = str.match(/[0-9]+/g)) {
            score += m.length > 1 ? 15 : 10
            g++
        }
        // special symbols
        if(m = str.match(/[`~!@#$%^&*\(\)_\+\{\}\[\]:;\<\>?\/\\\|]+/g)) {
            score += m.length > 1 ? 15 : 10
            g++
        }

        if(str.length > minLen) {
            score += str.length > parseInt(minLen * 1.5) ? 20 : 10
        }

        score += g * 5;

        return score;
    },

    isPostcode(str) {
        return !!str && /^[1-9]\d{5}$/.test(str)
    },

    isPhone(str) {
        return !!str && /^0\d{2,3}-\d{7-8}$/.test(str)
    },

    isMobile(str) {
        return !!str && /^1[^0124]\d{9}$/.test(str)
    },

    isIdCard(str) {
        return !!str && /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(str)
    },

    isChinese(str) {
        return !!str && /^[\u4e00-\u9fa5]+$/.test(str)
    }
}