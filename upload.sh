rsync -av --exclude-from=exclude.list -e "ssh -i ./ssh/hongkong.pem" ./ root@47.52.109.12:~/website2
