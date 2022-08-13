```bash
mkdir alex
mkdir beth
openssl genrsa -out ./alex/privkey.pem 2048
openssl genrsa -out ./beth/privkey.pem 2048
openssl rsa -in ./alex/privkey.pem -pubout -out ./alex/pubkey.pem
openssl rsa -in ./beth/privkey.pem -pubout -out ./beth/pubkey.pem
echo "secret message" > ./msg.txt
openssl rsautl -sign -in ./msg.txt -inkey ./beth/privkey.pem -out ./msg.sig
openssl rsautl -encrypt -inkey alex/pubkey.pem -pubin -in ./msg.txt -out ./msg.enc
openssl rsautl -decrypt -inkey alex/privkey.pem -in ./msg.enc -out ./msg.dec
```
