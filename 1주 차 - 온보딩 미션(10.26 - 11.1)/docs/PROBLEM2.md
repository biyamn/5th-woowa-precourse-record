## ๐ ๊ธฐ๋ฅ ์๊ตฌ ์ฌํญ

์ํธ๋ฌธ์ ์ข์ํ๋ ๊ดด์ง ๊ฐ๋ฐ์ ๋ธ๋ผ์ด์ด ์ด๋ฒ์๋ ์ค๋ณต ๋ฌธ์๋ฅผ ์ด์ฉํ ์๋ก์ด ์ํธ๋ฅผ ๋ง๋ค์๋ค. ์๋ฅผ ๋ค์ด "browoanoommnaon"์ด๋ผ๋ ์ํธ๋ฌธ์ ๋ค์๊ณผ ๊ฐ์ ์์๋ก ํด๋ํ  ์ ์๋ค.

1. "browoanoommnaon"
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

์์์ ๋ฌธ์์ด cryptogram์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ์ฐ์ํ๋ ์ค๋ณต ๋ฌธ์๋ค์ ์ญ์ ํ ๊ฒฐ๊ณผ๋ฅผ return ํ๋๋ก solution ๋ฉ์๋๋ฅผ ์์ฑํ๋ผ.

### ์ ํ์ฌํญ

- cryptogram์ ๊ธธ์ด๊ฐ 1 ์ด์ 1000 ์ดํ์ธ ๋ฌธ์์ด์ด๋ค.
- cryptogram์ ์ํ๋ฒณ ์๋ฌธ์๋ก๋ง ์ด๋ฃจ์ด์ ธ ์๋ค.

### ์คํ ๊ฒฐ๊ณผ ์์

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |

---
## ๐ ๊ตฌํ ๊ธฐ๋ฅ ๋ชฉ๋ก
- ์๋ ฅ ๋ฐ๊ธฐ โญ
  - ๊ธธ์ด๊ฐ 1 ์ด์ 1000 ์ดํ์ธ ๋ฌธ์์ด cryptogram์ ์ปดํจํฐ๋ก๋ถํฐ ์๋ ฅ๋ฐ๊ธฐ โญ
  - ๋ฌธ์์ด์ ์๋ฌธ์๋ก๋ง ์ด๋ฃจ์ด์ ธ ์๋ค โญ
- ์ค๋ณต ๋ฌธ์ ์ญ์ ํ๊ธฐ โญ
  - ํ ๋ฌธ์๊ฐ 2๊ฐ ์ด์ ์ด์ด์ ธ ์์ผ๋ฉด ๊ทธ ๋ฌธ์์ด์ ์ญ์ ํ๊ธฐ โญ
    - ๋ฌธ์์ด์ ์์ ํ๊ธฐ ์ฉ์ดํ๋๋ก ๋ฐฐ์ด์ผ๋ก ๋ง๋ค๊ธฐ โญ
    - ์ผ๋จ ์ฐ์๋๋ X ์ค๋ณต๋๋ O ๋ฌธ์๋ฅผ ๊ตฌํ์ฌ ๋ฐฐ์ด๋ก ๋ง๋ค๊ธฐ โญ
    - ๊ทธ ์ค๋ณต๋๋ ๋ฌธ์๊ฐ ์ฐ์๋๋ฉด ์์๋๋ ๋ฌธ์์ ์ธ๋ฑ์ค๋ฅผ ๋ชจ๋ ๊ตฌํด ๋ฐฐ์ด๋ก ๋ง๋ค๊ธฐ โญ
    - for๋ฌธ์ผ๋ก ๊ทธ ์ธ๋ฑ์ค๊ฐ ์๋ ๋ฐฐ์ด์ ๋๋ฉฐ ๋ฌธ์์ด์ ๋ฐฐ์ด์์ ์ฐ์๋ ๋ฌธ์ ์ญ์ ํ๊ธฐ โญ
  - ์ค๋ณต๋ ๋ฌธ์๊ฐ ๋์ด์ ์์ ๋๊น์ง ์์ ๊ณผ์ ์ ๋ฐ๋ณตํ๊ธฐ โญ
- ์ถ๋ ฅํ๊ธฐ โญ
  - ๊ฒฐ๊ณผ๊ฐ์ ๋ฐํํ๊ธฐ โญ
  
---
## โ ํ์คํธ ๊ฒฐ๊ณผ
- case1 (3 ms)
- case2 (1 ms)

๐ ํต๊ณผ!

---

## ๐ ์๋ก ์๊ฒ ๋ ์ 
- ์ฝ๋๋ฅผ ์์ฑํ๋ฉด์ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋ฉ/๋ค์ด๋ฐ ์ปจ๋ฒค์์ ์์ฃผ ์ฐพ์๋ดค๋ค. ํญ์ `for (let i = 0; i < arr.length; i++) {}`๊ฐ ๋ง๋์ง ์๋๋ฉด `for (let i=0; i<arr.length; i++) {}` ์ด๊ฒ ๋ง๋์ง ์์ํ๊ฒ ๊ถ๊ธํ์๋๋ฐ, ์ ์๊ฐ ๋ง๋ค๋ ๊ฑธ ์๊ฒ๋์๋ค.
- while๋ฌธ์ ์ฌ์ฉํ๋ฉฐ ์ ์ญ๋ณ์์ ์ง์ญ๋ณ์์ ๋ํด ์๊ฒ ๋์๋ค. ๊ธฐ์กด์๋ ๊ฐ๋๋ง ์๊ณ  ๋์ด ๋ฌด์์ด ๋ค๋ฅธ์ง ์ ํํ๋ ์์ง ๋ชปํ๋๋ฐ, while๋ฌธ์์ ์ด๋ค ๋ณ์๊ฐ ์๋ค๋ ์ค๋ฅ ๋๋ฌธ์ ๊ณ ์ํ๊ณ  ๋์๋ ์ ์ญ๋ณ์์ ์ง์ญ๋ณ์์ ์๋ฏธ๋ฅผ ์์๊ฐ ์ ์์๋ค.
- ์ฐ์๋๋ ๋ฌธ์๋ฅผ ์ฐพ๋ ์ฝ๋๋ฅผ ๊ตฌํํ๊ธฐ ์ํด 0์ด ์๋ 1๋ถํฐ ์์ํ๋ i๋ฅผ ์ด์ฉํ์ฌ for๋ฌธ์ผ๋ก ์ธ๋ฑ์ค i-1๊ณผ i๊ฐ ๊ฐ์์ง๋ฅผ ๋ณด๊ณ  ์ฐ์๋์ด์๋์ง๋ฅผ ํ๋จํ๋ค. for๋ฌธ์ ๋๋ฆด ๋ ์ด์  ์ธ๋ฑ์ค์ ํ์ฌ ์ธ๋ฑ์ค๋ฅผ ๋น๊ตํ๋ ๊ฒ์ด ํญ์ ์ด๋ ค์ ๋๋ฐ, ์ด์๊ฐ์ ์๋๋ฅผ ํตํด ์์๋ฅผ ๋น๊ตํ๋ ๊ฒ์ ์กฐ๊ธ ๋ ์ต์ํด์ง ๊ฒ ๊ฐ๋ค.

---

## โ ์์ฌ์ด ์  & ๊ถ๊ธํ ์ 
- ์๋ฐ์คํฌ๋ฆฝํธ์๋ ํ์ด์ฌ์ sum์ด๋ผ๋ ๋ด์ฅ ํจ์๊ฐ ์์ด์ ์์ฌ์ ๋ค. ์ด๋๋ฌธ์ ์ฝ๋ ๊ธธ์ด๊ฐ ๋ง์ด ๋์ด๋ ๊ฒ ๊ฐ๋ค. 
- ์ค๋ณต๋๋ ๋ฌธ์๋ฅผ ์ฐพ๋ ๊ฒ์ ๋น๊ต์  ์ฝ๊ฒ ํด๊ฒฐํ๋๋ฐ, ์ฐ์๋๋ ๋ฌธ์๋ฅผ ์ฐพ๋ ๊ฒ์ด ์ ๋ง ์ด๋ ค์ ๋ค. ๊ทธ๋์ ์ผ๋จ ์ค๋ณต๋๋ ๋ฌธ์๋ฅผ ์ฐพ๊ณ , ์ค๋ณต๋๋ ๊ทธ ๋ฌธ์์ ๊ทธ์ ๋ค์ ์๋ ๊ธ์๊ฐ ๊ฐ์์ง๋ฅผ ํ์ธํ์ฌ ์ฐ์๋๋์ง๋ฅผ ํ์ธํ๋๋ฐ, ์ด๊ฒ ์ต์ ์ ๋ฐฉ๋ฒ์ธ์ง ๊ถ๊ธํ๋ค. 