Content-Type은 뭐야?  

HTTP Content-Type은 HyperText Transfer Protocol (HTTP)를 통해 전송되는 데이터의 유형을 나타내는 헤더(header)입니다.   
이 헤더는 클라이언트와 서버 간에 교환되며, 데이터의 형식을 정의하여 수신측이 데이터를 올바르게 해석하고 처리할 수 있도록 도와줍니다.  

Content-Type 헤더는 두 부분으로 구성되어 있습니다.   
첫 번째 부분은 미디어 타입(media type)을 나타내는 문자열이며, 두 번째 부분은 선택적으로 문자 인코딩(character encoding)을 명시할 수 있습니다.  

```text
미디어 타입은 데이터의 주요 유형을 식별하는 데 사용됩니다. 일반적인 미디어 타입으로는 다음과 같은 것들이 있습니다:

- text/plain: 일반 텍스트 데이터를 나타냅니다.
- text/html: HTML 문서를 나타냅니다.
- application/json: JSON 데이터를 나타냅니다.
- application/xml: XML 데이터를 나타냅니다.
- image/jpeg: JPEG 이미지를 나타냅니다.
- audio/mp3: MP3 오디오 파일을 나타냅니다.
- video/mp4: MP4 비디오 파일을 나타냅니다.
```

문자 인코딩은 데이터를 표현하는 데 사용되는 문자 인코딩 방식을 지정합니다.   
일반적으로는 UTF-8이 가장 널리 사용되며, 다른 문자 인코딩 방식으로는 UTF-16, ISO-8859-1 등이 있습니다.  

Content-Type 헤더는 데이터를 전송할 때 수신측에게 어떤 종류의 데이터인지 알려주는 중요한 역할을 합니다.   
수신측은 Content-Type 헤더를 확인하여 데이터를 올바르게 처리하고 표시하는 방식을 결정할 수 있습니다.  