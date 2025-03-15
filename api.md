# 用户 Controller

用户 Controller


---
## 发送注册验证码

> BASIC

**Path:** /user/send-code

**Method:** GET

> REQUEST

**Query:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| email |  | YES | 收件邮箱 |



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| code | string | 响应码 |
| message | string | 响应描述 |
| timestamp | integer | 时间戳 |
| body | object | 响应实体 |

**Response Demo:**

```json
{
  "code": "",
  "message": "",
  "timestamp": 0,
  "body": {}
}
```




---
## 用户注册

> BASIC

**Path:** /user/register

**Method:** POST

> REQUEST

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| Content-Type | application/json | YES |  |

**Request Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| username | string | 用户名 |
| email | string | 邮箱 |
| verifyCode | string | 验证码 |
| password | string | 密码 |

**Request Demo:**

```json
{
  "username": "",
  "email": "",
  "verifyCode": "",
  "password": ""
}
```



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| code | string | 响应码 |
| message | string | 响应描述 |
| timestamp | integer | 时间戳 |
| body | object | 响应实体 |

**Response Demo:**

```json
{
  "code": "",
  "message": "",
  "timestamp": 0,
  "body": {}
}
```




---
## 用户登录

> BASIC

**Path:** /user/login

**Method:** POST

> REQUEST

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| Content-Type | application/json | YES |  |

**Request Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| username | string | 用户名 |
| password | string | 登录密码 |

**Request Demo:**

```json
{
  "username": "",
  "password": ""
}
```



> RESPONSE

**Headers:**

| name | value | required | desc |
| ------------ | ------------ | ------------ | ------------ |
| content-type | application/json;charset=UTF-8 | NO |  |

**Body:**

| name | type | desc |
| ------------ | ------------ | ------------ |
| code | string | 响应码 |
| message | string | 响应描述 |
| timestamp | integer | 时间戳 |
| body | string | 响应实体 |

**Response Demo:**

```json
{
  "code": "",
  "message": "",
  "timestamp": 0,
  "body": ""
}
```



