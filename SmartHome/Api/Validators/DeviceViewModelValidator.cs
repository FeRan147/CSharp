using Api.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Validators
{
    public class DeviceViewModelValidator : AbstractValidator<DeviceViewModel>
    {
        public DeviceViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
        }
    }
}
