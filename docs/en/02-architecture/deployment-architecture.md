# Deployment Architecture

## Deployment Flow

```text
GitHub Actions
  -> Build Docker images
  -> Push images to OCIR
  -> Pull images on OCI Compute
  -> Run containers
  -> Route traffic through OCI Load Balancer
```

## Runtime Layout

```text
OCI Load Balancer
  -> Next.js container on port 3000
  -> Spring Boot container on port 8080

OCI Compute Instance
  -> Next.js container
  -> Spring Boot container
  -> PostgreSQL container for MVP deployment
```

## Terraform-Managed Resources

- VCN.
- Public and private subnets.
- Compute instance.
- Load balancer.
- Security list or network security group rules.
- Container registry access settings when needed.

## MVP Deployment Note

For the first month, running PostgreSQL as a container on the compute instance is
acceptable for learning and demo purposes. A managed database or separate backup
strategy should be considered if the project becomes a long-running service.

