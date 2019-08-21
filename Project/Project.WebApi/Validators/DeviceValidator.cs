using FluentValidation;
using Project.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.WebApi.Validators
{
    public class DeviceValidator: AbstractValidator<Device>
    {
        public DeviceValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
        }
    }
}
