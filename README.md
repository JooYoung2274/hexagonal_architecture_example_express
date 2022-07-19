# hexagonal_architecture_example_express

### hexagonal architecture에 대한 설명 -> [<링크>](https://jooyoung2274.github.io//%ED%97%A5%EC%82%AC%EA%B3%A0%EB%82%A0-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-(%ED%8F%AC%ED%8A%B8-%EC%95%A4-%EC%96%B4%EB%8E%81%ED%84%B0-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98)/)

### 설명

![](https://velog.velcdn.com/images/joo0/post/3d597ca8-6e3b-44b1-82eb-c96827250561/image.png)


- 이론으로만 알고있던 hexagonal 아키텍처 구현
- port & adapter 아키텍처라고도 불리며 위 사진과 같은 구조
- 외부의 요청을 adapter(controller)로 받아 port(interface)를 통해 인터페이스를 맞춤
- DB에 접근할 때도 port(repository)를 통해 인터페이스 맞춤



**수정일 2022-07-19**

