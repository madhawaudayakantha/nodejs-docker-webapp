For more help on how to use Docker, head to https://docs.docker.com/go/guides/
madhawag@Madhawas-MacBook-Pro nodejs-docker-webapp % docker build . -t madhawag/node-js-docker-we
bapp
[+] Building 9.4s (10/10) FINISHED                                                                                                 docker:desktop-linux
 => [internal] load build definition from dockerfile                                                                                               0.0s
 => => transferring dockerfile: 278B                                                                                                               0.0s
 => [internal] load .dockerignore                                                                                                                  0.0s
 => => transferring context: 108B                                                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                  5.5s
 => [1/5] FROM docker.io/library/node:18-alpine@sha256:3482a20c97e401b56ac50ba8920cc7b5b2022bfc6aa7d4e4c231755770cf892f                            2.8s
 => => resolve docker.io/library/node:18-alpine@sha256:3482a20c97e401b56ac50ba8920cc7b5b2022bfc6aa7d4e4c231755770cf892f                            0.0s
 => => sha256:3482a20c97e401b56ac50ba8920cc7b5b2022bfc6aa7d4e4c231755770cf892f 1.43kB / 1.43kB                                                     0.0s
 => => sha256:f060341a3573359e299efe8028d73904f5fbbecf0bc683f2a0f64cc5589b90cb 1.16kB / 1.16kB                                                     0.0s
 => => sha256:385311cb02d5b5172a0ae965728ba7693b4351103238fd59c8773228d76e40b6 6.75kB / 6.75kB                                                     0.0s
 => => sha256:9fda8d8052c61740409c4bea888859c141fd8cc3f58ac61943144ff6d1681b2d 3.33MB / 3.33MB                                                     0.5s
 => => sha256:9eaea104398dec89a49af2f8253d42ec39730c2b4fae3745fe93ace746fdded7 47.49MB / 47.49MB                                                   1.2s
 => => sha256:8e5e74a525a337ac737e67628f3acf925388fd3db1983cad5bccadc5db3a3bc1 2.34MB / 2.34MB                                                     0.6s
 => => extracting sha256:9fda8d8052c61740409c4bea888859c141fd8cc3f58ac61943144ff6d1681b2d                                                          0.1s
 => => sha256:0af8382f830e91082c25d40a75d5a39626f3582c0d54a4f8c5e6557960e10835 449B / 449B                                                         0.8s
 => => extracting sha256:9eaea104398dec89a49af2f8253d42ec39730c2b4fae3745fe93ace746fdded7                                                          1.5s
 => => extracting sha256:8e5e74a525a337ac737e67628f3acf925388fd3db1983cad5bccadc5db3a3bc1                                                          0.0s
 => => extracting sha256:0af8382f830e91082c25d40a75d5a39626f3582c0d54a4f8c5e6557960e10835                                                          0.0s
 => [internal] load build context                                                                                                                  0.0s
 => => transferring context: 37.63kB                                                                                                               0.0s
 => [2/5] WORKDIR /app                                                                                                                             0.1s
 => [3/5] COPY package*.json ./                                                                                                                    0.0s
 => [4/5] RUN npm install                                                                                                                          0.8s
 => [5/5] COPY . .                                                                                                                                 0.0s
 => exporting to image                                                                                                                             0.1s
 => => exporting layers                                                                                                                            0.1s
 => => writing image sha256:9e1a4bfb572470ad02af604826bd1d1f2816d0ffca8d9f2a4f4088f9fd5300f3                                                       0.0s
 => => naming to docker.io/madhawag/node-js-docker-webapp                                                                                          0.0s

What's Next?
  View summary of image vulnerabilities and recommendations → docker scout quickview
madhawag@Madhawas-MacBook-Pro nodejs-docker-webapp % docker images
REPOSITORY                       TAG       IMAGE ID       CREATED         SIZE
madhawag/node-js-docker-webapp   latest    9e1a4bfb5724   4 seconds ago   180MB
madhawag@Madhawas-MacBook-Pro nodejs-docker-webapp % docker run -it -d -p 8001:8080 madhawag/node-js-docker-webapp:v1
Unable to find image 'madhawag/node-js-docker-webapp:v1' locally
docker: Error response from daemon: pull access denied for madhawag/node-js-docker-webapp, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
See 'docker run --help'.
madhawag@Madhawas-MacBook-Pro nodejs-docker-webapp % docker run -it -d -p 8001:8080 madhawag/node-js-docker-webapp:latest
197b44fbf1c4bfea233fc7d170ad239cc207e158bd07c8332d52e7920f57d0fc

madhawag@Madhawas-MacBook-Pro nodejs-docker-webapp % docker ps
CONTAINER ID   IMAGE                                   COMMAND                  CREATED          STATUS         PORTS                    NAMES
197b44fbf1c4   madhawag/node-js-docker-webapp:latest   "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   0.0.0.0:8001->8080/tcp   quizzical_mclean
madhawag@Madhawas-MacBook-Pro nodejs-docker-webapp % 