build:
	docker compose up --build --remove-orphans
up:
	docker compose up
down:
	docker compose down
show_logs:
	docker compose logs