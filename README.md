# docker-demo

docker

สำหรับ client
docker run -p 5173:5173 -v "D:\myself\project\docker-demo\client:/app" -v /app/node_modules -e CHOKIDAR_USEPOLLING=true react-docker
CHOKIDAR_USEPOLLING=true ให้ container สามารถตรวจสอบการเปลี่ยนแปลงได้ทันที
