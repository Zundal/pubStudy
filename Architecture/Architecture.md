| No. | 내용 | URL |
| --- | ---- | --- |
|     |      |     |
|     |      |     |
|     |      |     |

---

모놀리스 아키택처
마이크로서비스  아키택처

폴리글랏 아키텍처(Polyglot Architecture)

폴리글랏이라는 말 그대로 다양한 언어를 사용한 아키텍처를 의미합니다.
프로그래밍 언어나 DB는 각자 특성에 따라 활용되는 용도가 다릅니다. 
비즈니스 별로 특성에 맞는 프로그래밍 언어를 사용하여 개발한다면 더 좋은 품질의 서비스를 제공할 수 있습니다.

# Pros and Cons of MicroService Architecture

 3 분 소요

  

#### RECOMMEND POSTS BEFORE THIS[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#recommend-posts-before-this "Permalink")

- [MicroService Architecture](https://junhyunny.github.io/information/msa/microservice-architecture/)

## 1. MicroService Architecture 장점[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#1-microservice-architecture-%EC%9E%A5%EC%A0%90 "Permalink")

### 1.1. 폴리글랏 아키텍처(Polyglot Architecture)[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#11-%ED%8F%B4%EB%A6%AC%EA%B8%80%EB%9E%8F-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98polyglot-architecture "Permalink")

생소한 `폴리글랏(Polyglot)`이라는 단어의 의미부터 찾아보았습니다.

> knowing or using several languages.

폴리글랏이라는 말 그대로 다양한 언어를 사용한 아키텍처를 의미합니다. 프로그래밍 언어나 DB는 각자 특성에 따라 활용되는 용도가 다릅니다. 비즈니스 별로 특성에 맞는 프로그래밍 언어를 사용하여 개발한다면 더 좋은 품질의 서비스를 제공할 수 있습니다.

![](https://junhyunny.github.io/images/msa-pros-and-cons-1.JPG)

### 1.2. 실험과 혁신 유도[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#12-%EC%8B%A4%ED%97%98%EA%B3%BC-%ED%98%81%EC%8B%A0-%EC%9C%A0%EB%8F%84 "Permalink")

> 마이크로 서비스는 단순하고 크기가 작아 기업들이 적은 비용으로 새로운 프로세스, 알고리즘, 비즈니스 로직 등을 실험해 볼 수 있습니다.

대규모 일체형(monolith) 어플리케이션에서 새로운 비즈니스 기회들을 실험해보는 일은 쉽지 않고 비용도 많이 필요합니다. 마이크로 서비스는 새롭고 실험적인 기능을 만들어 적용시켜보고, 기대치에 부응하지 못하면 다른 마이크로 서비스로 변경하거나 대체할 수 있습니다.

### 1.3. 확장성에 대한 이야기[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#13-%ED%99%95%EC%9E%A5%EC%84%B1%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0 "Permalink")

마이크로서비스 아키텍처의 장점에 대해서 이야기할 때 확장성에 대한 이야기는 빠지지 않습니다. 어플리케이션 확장성에 대한 설명은 주로 스케일 큐브(Scale cube)를 사용합니다. 스케일 큐브(Scale Cube)는 어플리케이션을 확장하는 데 필요한 세 가지 주요 접근 방식을 정의합니다.

- X 축 방향의 확장은 어플리케이션을 복제해서 수평적으로 확장하는 것을 의미합니다.
    - 스케일 아웃(scale out)과 로드 밸런싱을 통해 이뤄집니다.
- Y 축 방향의 확장은 서로 다른 기능을 분리하는 것을 의미합니다.
    - 마이크로서비스 아키텍처를 통한 비즈니스적 확장을 의미합니다.
- Z 축 방향의 확장은 데이터 파티셔닝(partitioning) 또는 샤딩(sharding)을 의미합니다.

![](https://junhyunny.github.io/images/msa-pros-and-cons-2.JPG)

https://akfpartners.com/growth-blog/scale-cube

#### 1.3.1. Y 축 방향 확장 시 장점과 단점[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#131-y-%EC%B6%95-%EB%B0%A9%ED%96%A5-%ED%99%95%EC%9E%A5-%EC%8B%9C-%EC%9E%A5%EC%A0%90%EA%B3%BC-%EB%8B%A8%EC%A0%90 "Permalink")

Y 축 방향의 확장이 일체형 어플리케이션에 적용되면 일체형에 담겨있던 기능들은 분리되어 비즈니스 기능에 맞게 더 작은 서비스들로 분리가 됩니다. Y 축 방향의 확장이 이루어지면 아래와 같은 장점과 단점이 있습니다.

- Pros of Y axis scaling
    - Allows for organizational scale
    - Scales transactions well
    - Fault isolation
    - Increases cache hit rate
- Cons of Y axis scaling
    - Intellectually hard
    - Takes time to implement

### 1.4. 대체 가능성[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#14-%EB%8C%80%EC%B2%B4-%EA%B0%80%EB%8A%A5%EC%84%B1 "Permalink")

> 마이크로 서비스는 자기 완비적이고 독립적으로 배포 가능한 모듈입니다.  
> 그렇기 때문에 하나의 마이크로 서비스를 비슷한 다른 마이크로 서비스로 대체할 수 있습니다.

기존 일체형 아키텍처에선 하나의 모듈을 다른 모듈로 변경할 경우 시스템 전체에 미칠 수 있는 영향도 파악이 어렵기 때문에 많은 시간과 비용이 듭니다. 일체형 어플리케이션의 컴포넌트들이 높은 응집성을 가진다면 특정 모듈을 변경하는 일은 더 어려울 것입니다.

### 1.5. 유기적 시스템 구축 유도[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#15-%EC%9C%A0%EA%B8%B0%EC%A0%81-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%EC%B6%95-%EC%9C%A0%EB%8F%84 "Permalink")

> 유기적인 시스템이란 시간이 지남에 따라 점점 더 많은 기능을 추가하면서 성장해가는 시스템을 의미합니다.

마이크로 서비스는 독립적으로 관리 가능한 서비스입니다. 덕분에 마이크로서비스 아키텍처에서는 필요에 따라 서비스를 더 많이 추가하면서도 기존 서비스에 미치는 영향을 최소화할 수 있습니다.

### 1.6. 기술 부채의 경감[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#16-%EA%B8%B0%EC%88%A0-%EB%B6%80%EC%B1%84%EC%9D%98-%EA%B2%BD%EA%B0%90 "Permalink")

> 수명이 다한 기술을 사용하는 서비스를 다른 기술을 사용하는 서비스로 전환하는 것이 최소한의 비용으로 가능합니다.

시스템도 오래 사용하다보면 필연적인 죽음을 맞이하게 됩니다. 기술의 수명이 다함과 동시에 필요 여부에 따라 시스템은 새로운 기술을 통해 새로이 태어납니다. 마이크로 서비스는 단일 업무 수행에 대한 원칙으로 각 서비스 별로 의존성이 매우 낮은 것이 특징입니다. 그렇기 때문에 서비스 교체에 대한 비용이 높지 않습니다. 반면에 일체형 아키텍처의 경우 시스템 전체에 대한 변경으로 인해 많은 비용이 소요됩니다.

### 1.7. 다양한 버전의 공존[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#17-%EB%8B%A4%EC%96%91%ED%95%9C-%EB%B2%84%EC%A0%84%EC%9D%98-%EA%B3%B5%EC%A1%B4 "Permalink")

> 마이크로 서비스는 서비스 자체뿐만 아니라 실행 환경도 함께 패키징합니다.  
> 때문에 다양한 버전의 서비스가 동일한 환경에 함께 공존할 수 있습니다.

다양한 버전의 공존은 서버를 무중단으로 버전 업그레이드시 이점을 가질 수 있습니다. 일체형 어플리케이션의 경우 무중단 서버 업그레이드는 복잡하고 어려운 작업이 이루어집니다. 하지만 마이크로서비스 아키텍처의 경우 기존 버전의 서비스와 신규 버전의 서비스를 공존시킨 상태에서 라우팅 규칙을 이용해 신규 버전의 서비스를 안정적으로 테스트/배포할 수 있습니다. 예로 카나리 배포 전략(canary relase)을 들 수 있습니다.

![](https://junhyunny.github.io/images/msa-pros-and-cons-3.JPG)

https://reference-m1.tistory.com/211

## 2. MicroService Architecture 단점[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#2-microservice-architecture-%EB%8B%A8%EC%A0%90 "Permalink")

### 2.1. 시스템의 복잡성[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#21-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%98-%EB%B3%B5%EC%9E%A1%EC%84%B1 "Permalink")

독립적인 서비스들에 의해 시스템이 구성되어 있고 서비스들간의 협업을 통해 비즈니스가 처리되다보니 시스템이 복잡합니다. 운영 측면에서 한 비즈니스 프로세스의 파악을 위해 여러 서비스들의 존재를 알아야하고 그들 사이에서 발생하는 협업들에 대해서도 파악해야 합니다. 이는 운영의 어려움을 가져옵니다.

### 2.2. 어려운 트랜잭션 관리[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#22-%EC%96%B4%EB%A0%A4%EC%9A%B4-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B4%80%EB%A6%AC "Permalink")

마이크로 서비스 세상은 분산 환경이기 때문에 강력한 트랜잭션 일관성을 제공하기 힘듭니다. 최종적인 일관성 제공을 위한 보상 트랜잭션 패턴과 같은 메커니즘이 필요합니다. 정말 트랜잭션 무결성이 필요한 상황을 처리하기 매우 어려울 수 있으며, 이를 해결하기 위한 메커니즘을 구현하는데 큰 비용이 발생할 수 있습니다.

### 2.3. 테스트의 어려움[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#23-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9D%98-%EC%96%B4%EB%A0%A4%EC%9B%80 "Permalink")

테스트를 하기 위해선 의존성이 있는 서비스를 미리 확인해야 합니다. 의존성 있는 서비스가 정상적이지 않은 경우에는 테스트가 어렵습니다. 개발자가 개발을 위한 테스트 환경을 구축함에도 어려움을 겪습니다. 테스트하는 서비스가 아닌 의존성 있는 서비스에서 발생하는 에러의 경우에는 협업이 필요할 수 있습니다.

### 2.4. 디버깅의 어려움[Permalink](https://junhyunny.github.io/msa/msa-pros-and-cons/#24-%EB%94%94%EB%B2%84%EA%B9%85%EC%9D%98-%EC%96%B4%EB%A0%A4%EC%9B%80 "Permalink")

시스템의 문제가 발생하였을 때 이를 파악하는데 어려움이 발생합니다. 문제가 발생하였을 때 모놀리스 아키텍처에서는 서버 하나에 대해 문제의 원인 파악을 수행하면 되지만 마이크로서비스 아키텍처에서는 의존성 있는 모든 서비스들에 대헤 문제 원인 파악을 수행해야합니다. 만약 통합 로그 관리 시스템이 없다면 문제 해결을 위한 원인 파악은 악몽 수준일 듯 합니다.