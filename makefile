DOCKER_BUILD_CONTEXT=.
DOCKER_BACKEND_PATH=./Dockerfile
DOCKER_FRONTEND_PATH=./deploy/docker/frontend.dockerfile
DOCKER_PATH=$(DOCKER_BACKEND_PATH)
DOCKER_REGISTRY=docker.io
DOCKER_NAMESPACE=biosimulations
APP=platform-api
DOCKER_IMAGE=$(DOCKER_HOST)/$(DOCKER_NAMESPACE)/$(APP)
COMMIT=$(shell git rev-parse HEAD)
TAG=$(COMMIT)
ENV=production

all: platform-api account-api dispatch-service
.PHONY: all

deploy: push-biosimulations-api push-account-api push-dispatch-service
.PHONY: deploy

build: 
	docker  build -f $(DOCKER_PATH) -t crbm/$(APP):$(TAG) --build-arg app=$(APP) $(DOCKER_BUILD_CONTEXT)
.PHONY: build

push: build 
	docker push $(DOCKER_NAMESPACE)/$(APP):$(TAG)
.PHONY: push



platform-api:
					$(MAKE) build APP=platform-api TAG=$(TAG)
.PHONY: biosimulations-api

account-api: 
			$(MAKE) build APP=account-api TAG=$(TAG)

.PHONY: account-api

dispatch-service:
			$(MAKE) build APP=dispatch-service TAG=$(TAG)

push-platform-api:
					$(MAKE) push APP=platform-api TAG=$(TAG)
.PHONY: biosimulations-api

push-account-api: 
			$(MAKE) push APP=account-api TAG=$(TAG)

.PHONY: account-api

push-dispatch-service:
			$(MAKE) push APP=dispatch-service TAG=$(TAG)
