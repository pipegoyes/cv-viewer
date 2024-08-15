terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.115.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  skip_provider_registration = true # This is only required when the User, Service Principal, or Identity running Terraform lacks the permissions to register Azure Resource Providers.
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "rg-cv-viewer" {
  name     = "rg-cv-viewer"
  location = "West Europe"
}

resource "azurerm_static_web_app" "cv-viewer" {
  name                = "cv-viewer"
  resource_group_name = azurerm_resource_group.rg-cv-viewer.name
  location            = azurerm_resource_group.rg-cv-viewer.location
}

# data "azurerm_static_web_app" "cv-viewer" {
#   name                = "cv-viewer"
#   resource_group_name = azurerm_resource_group.rg-cv-viewer.name
# }