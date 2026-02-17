# @vue-pivottable/nuxt

## 작업 컨텍스트

이 패키지는 GitHub Issue #20 요청에 따라 개발되었습니다.

**관련 이슈**: https://github.com/Seungwoo321/vue-pivottable/issues/20
**요청 내용**: Nuxt.js SSR Error - SSR 환경에서 window 객체 접근 오류 해결

## 현재 상태

- [x] vue-pivottable v0.4.69 배포 완료 (SSR 가드 추가)
- [x] Nuxt 모듈 개발 완료
- [x] Nuxt 2/3 지원
- [ ] GitHub 레포 생성 (`vue-pivottable/nuxt`)
- [ ] npm 배포 (`@vue-pivottable/nuxt`)
- [ ] 이슈 코멘트 추가
- [ ] 이슈 닫기

## 다음 작업 지침

### 1. GitHub 레포 생성
- Organization: `vue-pivottable`
- Repository name: `nuxt`
- 이 디렉토리의 내용을 푸시

### 2. npm 배포
```bash
cd /Users/mzc01-swlee/dev/repository/github/projects-v1/nuxt-module
npm publish --access public
```

### 3. 이슈 코멘트 작성
이슈 URL: https://github.com/Seungwoo321/vue-pivottable/issues/20

코멘트 내용:
```markdown
이 이슈는 v0.4.69에서 수정되었습니다.

### 수정 내용
- SSR 환경에서 `window` 접근 시 가드 추가
- TSV Export 렌더러의 `window.innerHeight` 문제 해결

### 방법 1: 직접 사용 (client-side only)
```js
// nuxt.config.js
export default {
  plugins: [
    { src: '~/plugins/vue-pivottable.js', mode: 'client' }
  ]
}
```

### 방법 2: Nuxt 모듈 사용 (권장)
```bash
npm install @vue-pivottable/nuxt
```

```js
// Nuxt 2: nuxt.config.js
export default {
  modules: ['@vue-pivottable/nuxt/nuxt2']
}

// Nuxt 3: nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@vue-pivottable/nuxt']
})
```

자세한 내용은 [README](https://github.com/Seungwoo321/vue-pivottable#nuxtjs-ssr)를 참고하세요.
```

### 4. 이슈 닫기
코멘트 추가 후 이슈 닫기
