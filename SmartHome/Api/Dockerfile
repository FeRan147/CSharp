FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["Api/Api.csproj", "Api/"]
COPY ["DependencyInjection/DependencyInjection.csproj", "DependencyInjection/"]
COPY ["Infrastructure/InfrastructureInterfaces.csproj", "Infrastructure/"]
COPY ["InfrastructureServices/InfrastructureServices.csproj", "InfrastructureServices/"]
COPY ["Domain/DomainInterfaces.csproj", "Domain/"]
COPY ["DomainServices/DomainServices.csproj", "DomainServices/"]
RUN dotnet restore "Api/Api.csproj"
COPY . .
WORKDIR "/src/Api"
RUN dotnet build "Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Api.dll"]