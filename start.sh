cd client
pm2 start npm --name client -- start
cd ../server
pm2 start npm --name server -- start