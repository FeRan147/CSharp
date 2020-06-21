using Api.Models;
using FluentValidation;

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
