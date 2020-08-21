docker-compose up -d --build
docker volume rm $(docker volume ls -qf dangling=true)
docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
docker images -a | sed '1 d' | awk '{print $3}' | xargs -L1 docker rmi -f