## ๐ ๊ธฐ๋ฅ ์๊ตฌ ์ฌํญ

์ด๋ ์ฐ๋ชป์ ์๋ง ๋ง์์ ์ข์ฒ๋ผ ๋ฃ์ง ์๋ ์ฒญ๊ฐ๊ตฌ๋ฆฌ๊ฐ ์ด๊ณ  ์์๋ค. ์ฒญ๊ฐ๊ตฌ๋ฆฌ๋ ์๋ง๊ฐ ํ๋ ๋ง์ ๋ฌด์์ด๋  ๋ฐ๋๋ก ๋งํ์๋ค.

์๋ง ๋ง์ word๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ์๋ ์ฒญ๊ฐ๊ตฌ๋ฆฌ ์ฌ์ ์ ์ฐธ๊ณ ํด ๋ฐ๋๋ก ๋ณํํ์ฌ return ํ๋๋ก solution ๋ฉ์๋๋ฅผ ์์ฑํ๋ผ.

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Z | Y | X | W | V | U | T | S | R | Q | P | O | N | M | L | K | J | I | H | G | F | E | D | C | B | A |

### ์ ํ์ฌํญ

- word๋ ๊ธธ์ด๊ฐ 1 ์ด์ 1,000 ์ดํ์ธ ๋ฌธ์์ด์ด๋ค.
- ์ํ๋ฒณ ์ธ์ ๋ฌธ์๋ ๋ณํํ์ง ์๋๋ค.
- ์ํ๋ฒณ ๋๋ฌธ์๋ ์ํ๋ฒณ ๋๋ฌธ์๋ก, ์ํ๋ฒณ ์๋ฌธ์๋ ์ํ๋ฒณ ์๋ฌธ์๋ก ๋ณํํ๋ค.

### ์คํ ๊ฒฐ๊ณผ ์์

| word | result |
| --- | --- |
| "I love you" | "R olev blf" |

---
## ๐ ๊ตฌํ ๊ธฐ๋ฅ ๋ชฉ๋ก
- ์๋ ฅ ๋ฐ๊ธฐ โญ
  - ๊ธธ์ด๊ฐ 1 ์ด์ 1,000 ์ดํ์ธ ๋ฌธ์์ด word ์ปดํจํฐ๋ก๋ถํฐ ์๋ ฅ๋ฐ๊ธฐ โญ
- ๋ณํํ๊ธฐ โญ
  - ์ฒญ๊ฐ๊ตฌ๋ฆฌ ์ฌ์ ์ ๋ง๋ ๋ค โญ
    - for๋ฌธ๊ณผ ASCII๋ฅผ ์ด์ฉํด์ ๋์๋๋ฆฌ๋ฅผ ๋ง๋ค ์ ์์ ๊ฒ ๊ฐ๋ค. โญ
    - 0~25์ ์ซ์์ 65(๋๋ฌธ์) or 97(์๋ฌธ์) โญ
  - ์ํ๋ฒณ๋ง ์ฒญ๊ฐ๊ตฌ๋ฆฌ ์ฌ์ ์ ์ฐธ๊ณ ํ์ฌ ๋ณํํ๋ค โญ
  - ๋๋ฌธ์๋ ๋๋ฌธ์๋ก, ์๋ฌธ์๋ ์๋ฌธ์๋ก ๋ณํํ๋ค โญ
- ๊ฒฐ๊ณผ ์ถ๋ ฅํ๊ธฐ โญ

---
## โ ํ์คํธ ๊ฒฐ๊ณผ
- case1 (2 ms)

๐ ํต๊ณผ!

---

## ๐ ์๋ก ์๊ฒ ๋ ์ 
- ์๋ฐ์คํฌ๋ฆฝํธ๊ฐ ์ต์ํ์ง ์์์ ๋์๋๋ฆฌ์ ์ ๊ทผํ๊ณ , ์์คํค์ฝ๋๋ฅผ ๋ฌธ์๋ก ๋ฐ๊พธ๋ ๊ฒ์์ ์ด๋ ค์์ ๋๊ผ๋ค. ๊ทธ๋์ ํ์ด์ฌ์ผ๋ก ์ฝ๋๋ฅผ ์์ฑํ ํ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๋ณํํ๊ธฐ๋ ํ๋ค. 
- ํน์  ๋ฌธ์๋ฅผ ๋ฐ๊ฟ์ฃผ๋ ํจ์์ธ replace()๋ฅผ ์ฐ๋ ์ค ์์์ง๋ง, replace()์ ๊ธฐ๋ฅ์ธ `ํน์  ๋ฌธ์๋ฅผ ๋ฐ๊พธ๋ ๊ฒ`์ด ์๋๋ผ `ํน์  ์ธ๋ฑ์ค์ ์๋ ๋ฌธ์๋ฅผ ๋ฐ๊พธ๋ ๊ฒ`์ ์จ์ผํด์ replace()๋ ์ฐ์ง ๋ชปํ๋ค. ๊ทธ๋์ ํน์  ์ธ๋ฑ์ค๋ฅผ ๋ณ๊ฒฝํด์ฃผ๋ ๋ด์ฅ ํจ์๊ฐ ์๋ ๊ฒ์ํด๋ดค๋๋ฐ, ์๋ฐ์คํฌ๋ฆฝํธ์ ๊ทธ๋ฐ ํจ์๋ ์๋ค๋ ๊ฒ์ ์๊ฒ ๋์๋ค.
- ๋์  ์คํ์ค๋ฒํ๋ก์ฐ์์ ๋๊ฐ ์ง์  ์์ฑํ '๋ฌธ์์ด์์ ํน์  ์ธ๋ฑ์ค๋ฅผ ๋ฐ๊พธ๋ ํจ์ replaceAt()'์ ์๊ฒ ๋์๋ค. 
---

## โ ์์ฌ์ด ์  & ๊ถ๊ธํ ์ 
- ๋ฐ๊ฒฌํ ์ฌ์ฉ์ ์ ์ ํจ์ `replaceAt` ํจ์๋ `String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
  }`์ธ๋ฐ, ์ฌ์ค ์ฒ์์๋ String.prototype๋ถํฐ this์ substring๊น์ง ์ดํด๊ฐ ๊ฐ์ง ์์๋ค. ๊ทธ๋์ ์ด๋ฅผ ์ดํดํ๊ธฐ ์ํด ๊ฒ์ํด๋ณด๊ธฐ ์์ํ๋ค.
  - replaceAt ์์ ์๋ String.prototype๋ replaceAt() ์์ ๋ฌธ์์ด์ ๋ถ์ด๋ผ๋ ๋ง์ธ ๊ฒ ๊ฐ๋ค. 
  - ํจ์์ ์ด๋ฆ์ replaceAt์ด๊ณ , ์ธ์๋ก index์ replacement๋ฅผ ๋ฐ๋๋ค. 
  - this๋ ํ์ฌ์ ๊ทธ ๋ฌธ์์ด์ ์๋ฏธํ๋ ๊ฒ ๊ฐ๋ค. 
  - substring(start, end)๋ start๋ถํฐ end-1 ์ธ๋ฑ์ค๊น์ง์ ๋ฌธ์์ด์ ์๋ผ์ฃผ๋ ๋ด์ฅ ํจ์์ด๋ค.
  - ๋ฐ๊ฟ์ค replacement ์ ๋ค๋ก ๊ธฐ์กด์ ๋ฌธ์์ด์ ๋ถ์ฌ์ค๋ค. ์ธ์๋ก ํ๋(n)๋ง ์ค๋ฉด n-1๋ฒ์งธ ์ธ๋ฑ์ค(n๊ฐ) ๋ค๋ถํฐ ์๋ผ๋ด์ด์ค๋ค๋ ์๋ฏธ์ด๋ค.

- ์ค๋ช ์ถ๊ฐ
  - String.prototype: ๋ชจ๋  String ํ์์ ๊ฐ๋ค์๊ฒ ๊ณตํต์ ์ผ๋ก ์ ์ฉ๋๋ ๊ฐ์ฒด์ด๋ฉฐ ๊ฑฐ๊ธฐ์ replaceAt์ด๋ผ๋ ํจ์๋ฅผ ์ถ๊ฐํด ์ฃผ๋ ๋ฐฉ์์ด๋ค.
  - this: ์คํ๋๋ ํจ์๊ฐ ์ํด ์๋ ๊ฐ์ฒด๋ฅผ ๊ฐ๋ฆฌํจ๋ค.
  - replaceAt ๊ฐ์ ๊ฒฝ์ฐ์๋ String์ prototype์ ์ถ๊ฐํ ํจ์์ด๋๊น, ๊ฒฐ๊ณผ์ ์ผ๋ก ์ด ํจ์๊ฐ ์ํด ์๋ ๊ฐ์ฒด(= this)๋ String ํ์์ ํน์ ํ ๊ฐ์ฒด์ด๋ค.